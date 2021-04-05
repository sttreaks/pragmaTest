import Web3 from 'web3';
import { Injectable } from '@nestjs/common';
import * as env from 'dotenv';

import { GroupIndexDto } from './interfaces/groupIndex.dto';
import { IndexBlockchainDto } from './interfaces/IndexBlockchain.dto';
import { Group } from './models/group.entity';
import { GroupIndex } from './models/groupIndexes.entity';
import { IndexBlockchain } from './models/indexBlockchain.entity';

env.config();

const config = {
  address: process.env.ADDRESS,
  provider: process.env.PROVIDER,
  abi: JSON.parse(process.env.ABI),
};

@Injectable()
export class AppService {
  private web3 = new Web3(config.provider);
  private contract = new this.web3.eth.Contract(config.abi, config.address)

  constructor() {}

  async getGroupIdsService (): Promise<number[]> {
    const groupIds = await this.contract.methods.getGroupIds().call();
    return groupIds.map(groupId => parseInt(groupId));
  }

  async getGroupService (groupId: number): Promise<GroupIndexDto | String> {
    try {
      const group: GroupIndexDto = await this.contract.methods.getGroup(groupId).call();

      const groupSave = new Group();
      groupSave.groupId = groupId;
      groupSave.name = group.name;
      await groupSave.save();

      group.indexes.forEach(async index => {
        const groupIndexSave = new GroupIndex();
        groupIndexSave.index = index;
        groupIndexSave.group = groupId;
        await groupIndexSave.save();
      });

      return group;
    } catch (e) {
      return "Uncorrected request parameters";
    }
  }

  async getIndexService (indexId): Promise<IndexBlockchainDto | String> {
    try {
      const index: IndexBlockchainDto = await this.contract.methods.getIndex(indexId).call();

      const indexBlockchainSave = new IndexBlockchain();
      indexBlockchainSave.indexId = indexId;
      indexBlockchainSave.name = index.name;
      indexBlockchainSave.ethPriceInWei = index.ethPriceInWei;
      indexBlockchainSave.usdPriceInCents = index.usdPriceInCents;
      indexBlockchainSave.usdCapitalization = index.usdCapitalization;
      indexBlockchainSave.percentageChange = index.percentageChange;
      await indexBlockchainSave.save();

      return index;
    } catch (e) {
      return "Uncorrected request parameters";
    }
  }

  async getLastBlock(): Promise<Object> {
    return await this.web3.eth.getBlock('latest');
  }
}
