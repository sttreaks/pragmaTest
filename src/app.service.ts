import Web3 from 'web3';
import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ADDRESS, CACHE_TTL, PROVIDER } from './config';
import { ABI } from './config/abi';

@Injectable()
export class AppService {
  private web3 = new Web3(PROVIDER);
  private contract = new this.web3.eth.Contract(ABI, ADDRESS);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getGroupIds(): Promise<JSON> {
    let groupIds = await this.cacheManager.get('GroupId');

    if (!groupIds) {
      groupIds = await this.contract.methods.getGroupIds().call();
      await this.cacheManager.set('GroupId', groupIds, { ttl: CACHE_TTL });
    }

    return groupIds;
  }

  async getGroup(groupId): Promise<JSON> {
    let group = await this.cacheManager.get(groupId);

    if (!group) {
      group = await this.contract.methods.getGroup(groupId).call();
      await this.cacheManager.set(groupId, group, { ttl: CACHE_TTL });
    }

    return group;
  }

  async getIndex(indexId): Promise<JSON> {
    let index = await this.cacheManager.get(indexId);

    if (!index) {
      index = await this.contract.methods.getIndex(indexId).call();
      await this.cacheManager.set(indexId, index, { ttl: CACHE_TTL });
    }

    return index;
  }

  async getLastBlock(): Promise<Object> {
    let latest = await this.cacheManager.get('latest');

    if (!latest) {
      latest = await this.web3.eth.getBlock('latest');
      await this.cacheManager.set('latest', latest, { ttl: CACHE_TTL });
    }

    return latest;
  }
}
