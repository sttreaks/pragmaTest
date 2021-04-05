import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './groupId.entity';

@Injectable()
export class GroupIdService {
  constructor(
    @InjectRepository(Group)
    private GroupIdRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    return this.GroupIdRepository.find();
  }

  findOne(id: string): Promise<Group> {
    return this.GroupIdRepository.findOne(id);
  }

  insert(group: Group) {
    this.GroupIdRepository.create(group);
  }

  async remove(id: string): Promise<void> {
    await this.GroupIdRepository.delete(id);
  }
}
