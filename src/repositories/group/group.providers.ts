import { Connection, Repository } from 'typeorm';

import { Group } from '../../models/group.entity';
import { DATABASE_CONNECTION, REPOSITORIES } from '../../constants';

export const groupProviders = [
  {
    provide: REPOSITORIES.GROUP,
    useFactory: (connection: Connection): Repository<Group> =>
      connection.getRepository(Group),
    inject: [DATABASE_CONNECTION],
  },
];
