import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { config } from '../config/database';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  entities: [join(__dirname, '../models/*{.ts,.js}')],
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

