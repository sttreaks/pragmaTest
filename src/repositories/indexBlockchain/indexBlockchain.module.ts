import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { indexBlockchainProviders } from './indexBlockchain.providers';
import { IndexBlockchainService } from './indexBlockchain.service';

@Module({
  imports: [DatabaseModule],
  providers: [...indexBlockchainProviders, IndexBlockchainService],
  exports: [IndexBlockchainService],
})
export class IndexBlockchainModule {}
