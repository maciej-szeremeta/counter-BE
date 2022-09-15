import { DB, } from './config/config';

/* eslint-disable prettier/prettier */
export const config = {
  type: 'mysql',
  host: DB.HOST,
  port: DB.PORT,
  username: DB.USERNAME,
  password: DB.PASSWORD,
  database: DB.DATABASE,
  entities: [ `${__dirname}/**/**.entity{.ts,.js}`, ],
  bigNumberStrings: false,
  logging: true,
  migrations: [ 'src/migrations/*.ts', ],
  cli: {
    migrationsDir: 'migration',
  },
  synchronize: false,
};
