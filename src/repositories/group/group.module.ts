import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { groupProviders } from './group.providers';
import { GroupService } from './group.service';

@Module({
  imports: [DatabaseModule],
  providers: [...groupProviders, GroupService],
  exports: [GroupService],
})
export class GroupModule {}
