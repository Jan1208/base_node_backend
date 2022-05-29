import Sequelize from 'sequelize';
import log from './logging';

const postgresConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_APPLICATION_DATABASE,
  dialect: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  logging: (msg) => log.debug(msg),
};

export default new Sequelize(postgresConfig);

export function connectToPostgres(sequelize) {
  try {
    sequelize.authenticate();
    log.info('Connection to Database successfully');
  } catch (error) {
    log.error('Connection to Database not successfully', error);
  }
}
