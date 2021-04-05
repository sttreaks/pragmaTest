import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { indexBlockchainProviders } from './indexBlockchain.providers';
import { IndexBlockchainRepository } from './indexBlockchain.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...indexBlockchainProviders, IndexBlockchainRepository],
  exports: [IndexBlockchainRepository],
})
export class IndexBlockchainModule {}
