import { Injectable, Inject } from '@nestjs/common';
import { Repository, QueryRunner } from 'typeorm';

import { IndexBlockchain, IIndexBlockchain } from '../../models/indexBlockchain.entity';
import { REPOSITORIES } from '../../constants';
import { PUBLIC_TABLES } from '../../database';
import { getParamValues } from '../utils';

@Injectable()
export class IndexBlockchainService {
  constructor(
    @Inject(REPOSITORIES.INDEX)
    private readonly repository: Repository<IndexBlockchain>,
  ) {}

  async findAll(): Promise<IndexBlockchain[]> {
    return await this.repository.query(`SELECT * FROM ${PUBLIC_TABLES.INDEX};`);
  }

  async findById(id): Promise<IndexBlockchain> {
    const rawData = await this.repository.query(
      `SELECT * FROM ${PUBLIC_TABLES.INDEX} WHERE "id"=${id}`,
    );
    return rawData?.[0];
  }

  async addIndexBlockchain (
    index: IIndexBlockchain,
    queryRunner: QueryRunner = this.repository.queryRunner,
  ): Promise<void> {
    const parameters = [
      index.id,
      index.name,
      index.ethPriceInWei,
      index.percentageChange,
      index.usdCapitalization,
      index.usdPriceInCents,
    ];
    await queryRunner.query(
      `INSERT INTO ${PUBLIC_TABLES.GROUP} (
        "id",
        "name",
        "ethPriceInWei",
        "percentageChange",
        "usdCapitalization",
        "usdPriceInCents",
      )
      VALUES (${getParamValues(parameters.length)})`,
      parameters,
    );
  }
}
