import { Sequelize } from 'sequelize';

const connection = new Sequelize('sqlite::memory:', {
  logging: console.log,
});

export default connection;
