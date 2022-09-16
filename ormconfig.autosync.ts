import { DB, } from './config/config';

export const ORM_CONFIG = {
  type: 'mysql',
  host: DB.HOST,
  port: DB.PORT,
  username: DB.USERNAME,
  password: DB.PASSWORD,
  database: DB.DATABASE,
  entities: [ `${__dirname}/**/**.entity{.ts,.js}`, ],
  bigNumberStrings: false,
  logging: true,
  synchronize: true,
};
