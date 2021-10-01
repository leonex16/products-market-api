import { Connection, ConnectionOptions, createConnection } from "typeorm";

export let db: Connection | null = null;
const connectionConf: ConnectionOptions = {
  type: process.env.DB_TYPE ?? 'mysql' as any,
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
  username: process.env.DB_USERNAME ?? '',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_DATABASE ?? '',
  entities: [ 'src/models/**/*.js' ],
  synchronize: false,
  logging: true,
}

createConnection(connectionConf)
  .then( connection => {
    db = connection;
    console.log('Connected to DB MySQL'.green)
  })
  .catch( err => console.error('Error to try connect to DB: '.red, err))