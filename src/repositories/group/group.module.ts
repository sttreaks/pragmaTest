import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { groupProviders } from './group.providers';
import { GroupRepository} from './group.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...groupProviders, GroupRepository],
  exports: [GroupRepository],
})
export class GroupModule {}
