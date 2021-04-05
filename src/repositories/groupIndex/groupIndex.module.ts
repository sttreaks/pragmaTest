import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { groupIndexProviders } from './groupIndex.providers';
import { GroupIndexRepository } from './groupIndex.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...groupIndexProviders, GroupIndexRepository],
  exports: [GroupIndexRepository],
})
export class GroupIndexModule {}
