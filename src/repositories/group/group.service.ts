import { Injectable, Inject } from '@nestjs/common';
import { Repository, QueryRunner } from 'typeorm';

import { Group, IGroup } from '../../models/group.entity';
import { REPOSITORIES } from '../../constants';
import { PUBLIC_TABLES } from '../../database';
import { getParamValues } from '../utils';

@Injectable()
export class GroupService {
  constructor(
    @Inject(REPOSITORIES.GROUP)
    private readonly repository: Repository<Group>,
  ) {}

  async findAll(): Promise<Group[]> {
    return await this.repository.query(`SELECT * FROM ${PUBLIC_TABLES.GROUP};`);
  }

  async findById(id): Promise<Group> {
    const rawData = await this.repository.query(
      `SELECT * FROM ${PUBLIC_TABLES.GROUP} WHERE "id"=${id}`,
    );
    return rawData?.[0];
  }

  async addGroup(
    group: IGroup,
    queryRunner: QueryRunner = this.repository.queryRunner,
  ): Promise<void> {
    const parameters = [group.id, group.name];
    await queryRunner.query(
      `INSERT INTO ${PUBLIC_TABLES.GROUP} (
        "id",
        "name",
      )
      VALUES (${getParamValues(parameters.length)});`,
      parameters,
    );
  }
}
