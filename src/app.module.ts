import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from './database/ormconfig';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot({
      ...connectionOptions,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
