import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groupId.entity';
import { GroupIdService } from './groupId.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupIdService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
