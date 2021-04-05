import Web3 from 'web3';
import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import * as env from 'dotenv';

env.config();

const config = {
  address: process.env.ADDRESS,
  provider: process.env.PROVIDER,
  cache_ttl: process.env.CACHE_TTL,
  abi: JSON.parse(process.env.ABI),
};

@Injectable()
export class AppService {
  private web3 = new Web3(config.provider);
  private contract = new this.web3.eth.Contract(config.abi, config.address);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getGroupIds(): Promise<JSON> {
    let groupIds = await this.cacheManager.get('GroupId');

    if (!groupIds) {
      groupIds = await this.contract.methods.getGroupIds().call();
      await this.cacheManager.set('GroupIds', groupIds, {
        ttl: config.cache_ttl,
      });
    }

    return groupIds;
  }

  async getGroup(groupId): Promise<JSON> {
    let group = await this.cacheManager.get(groupId);

    if (!group) {
      group = await this.contract.methods.getGroup(groupId).call();
      await this.cacheManager.set(groupId, group, { ttl: config.cache_ttl });
    }

    return group;
  }

  async getIndex(indexId): Promise<JSON> {
    let index = await this.cacheManager.get(indexId);

    if (!index) {
      index = await this.contract.methods.getIndex(indexId).call();
      await this.cacheManager.set(indexId, index, { ttl: config.cache_ttl });
    }

    return index;
  }

  async getLastBlock(): Promise<JSON> {
    let latest = await this.cacheManager.get('latest');

    if (!latest) {
      latest = await this.web3.eth.getBlock('latest');
      await this.cacheManager.set('latest', latest, { ttl: config.cache_ttl });
    }

    return latest;
  }
}
