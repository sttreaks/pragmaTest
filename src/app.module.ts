import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GroupModule, IndexBlockchainModule } from './repositories';

@Module({
  imports: [GroupModule, IndexBlockchainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
