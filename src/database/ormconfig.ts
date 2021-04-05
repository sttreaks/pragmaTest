import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const config = {
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
};

const connectionOptions: ConnectionOptions = {
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
  logging: ['warn', 'error'],
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = connectionOptions;
