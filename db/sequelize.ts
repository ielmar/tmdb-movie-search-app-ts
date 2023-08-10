import { Sequelize } from 'sequelize-typescript';
import { Movie } from './models/Movie';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'movies',
  storage: ':memory:',
});

sequelize.addModels([Movie]);
