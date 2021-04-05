import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('group-ids')
  async getGroupIds(): Promise<JSON> {
    return await this.appService.getGroupIds();
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
  async getLastBlock(): Promise<JSON> {
    return await this.appService.getLastBlock();
  }
}
