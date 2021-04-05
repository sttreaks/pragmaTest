import { Connection, Repository } from 'typeorm';

import { GroupIndex } from '../../models/groupIndexes.entity';
import { DATABASE_CONNECTION, REPOSITORIES } from '../../constants';

export const groupIndexProviders = [
  {
    provide: REPOSITORIES.GROUP_INDEX,
    useFactory: (connection: Connection): Repository<GroupIndex> =>
      connection.getRepository(GroupIndex),
    inject: [DATABASE_CONNECTION],
  },
];
