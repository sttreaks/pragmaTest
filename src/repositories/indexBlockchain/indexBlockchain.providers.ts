import { Connection, Repository } from 'typeorm';

import { IndexBlockchain } from '../../models/indexBlockchain.entity';
import { DATABASE_CONNECTION, REPOSITORIES } from '../../constants';

export const indexBlockchainProviders = [
  {
    provide: REPOSITORIES.INDEX,
    useFactory: (connection: Connection): Repository<IndexBlockchain> =>
      connection.getRepository(IndexBlockchain),
    inject: [DATABASE_CONNECTION],
  },
];
