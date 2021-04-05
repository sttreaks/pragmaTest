import { EntityRepository, Repository } from 'typeorm';

import { IndexBlockchain } from '../../models/indexBlockchain.entity';

@EntityRepository(IndexBlockchain)
export class IndexBlockchainRepository extends Repository<IndexBlockchain> {}
