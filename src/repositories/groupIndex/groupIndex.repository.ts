import { EntityRepository, Repository } from 'typeorm';

import { GroupIndex } from '../../models/groupIndexes.entity';

@EntityRepository(GroupIndex)
export class GroupIndexRepository extends Repository<GroupIndex> {}
