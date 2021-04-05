import { CacheModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GroupModule, IndexBlockchainModule } from './repositories';
import connectionOptions = require('./database/ormconfig');
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot(connectionOptions),
    GroupModule,
    IndexBlockchainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
