import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('group-ids')
  async getGroupIds(): Promise<JSON> {
    const groupIds = await this.appService.getGroupIds();

    return groupIds;
  }

  @Get('group/:groupId')
  async getGroup(@Param('groupId') groupId): Promise<JSON> {
    return await this.appService.getGroup(groupId);
  }

  @Get('index/:indexId')
  async getIndex(@Param('indexId') indexId): Promise<JSON> {
    return await this.appService.getIndex(indexId);
  }

  @Get('last-block')
  async getLastBlock(): Promise<Object> {
    const lastBlock = await this.appService.getLastBlock();

    return lastBlock;
  }
}
