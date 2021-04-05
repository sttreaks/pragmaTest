import { CACHE_MANAGER, Controller, Get, Inject, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';

import { AppService } from './app.service';
import { GroupIndexDto } from './interfaces/groupIndex.dto';
import { IndexBlockchainDto } from './interfaces/indexBlockchain.dto';
import { ApiParam } from '@nestjs/swagger';

const cache_ttl = process.env.CACHE_TTL;

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly appService: AppService,
  ) {}

  @Get('group-ids')
  async getGroupIds(): Promise<JSON> {
    let groupIds = await this.cacheManager.get('GroupId');

    if (!groupIds) {
      groupIds = await this.appService.getGroupIdsService();
      await this.cacheManager.set('GroupIds', groupIds, {
        ttl: cache_ttl,
      });
    }
    return groupIds;
  }

  @Get('group/:groupId')
  @ApiParam({name: 'groupId', required: true, schema: { oneOf: [{type: 'string'}, {type: 'integer'}]}})
  async getGroup(@Param('groupId') groupId): Promise<GroupIndexDto> {
    let group = await this.cacheManager.get(groupId);

    if (!group) {
      group = await this.appService.getGroupService(groupId);
      await this.cacheManager.set(groupId, group, { ttl: cache_ttl });
    }

    return group;
  }

  @Get('index/:indexId')
  @ApiParam({name: 'indexId', required: true, schema: { oneOf: [{type: 'string'}, {type: 'integer'}]}})
  async getIndex(@Param('indexId') indexId): Promise<IndexBlockchainDto> {
    let index = await this.cacheManager.get(indexId);

    if (!index) {
      index = await this.appService.getIndexService(indexId);
      await this.cacheManager.set(indexId, index, { ttl: cache_ttl });
    }

    return index;
  }

  @Get('last-block')
  async getLastBlock(): Promise<Object> {
    let latest = await this.cacheManager.get('latest');

    if (!latest) {
      latest = await this.appService.getLastBlock();
      await this.cacheManager.set('latest', latest, { ttl: cache_ttl });
    }
    return latest;
  }
}
