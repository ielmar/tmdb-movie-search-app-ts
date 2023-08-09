import { Model, DataTypes, Sequelize } from 'sequelize';

import connection from '../connection';

const init_movies = (sequelize: Sequelize, Types: typeof DataTypes) => {
  class movies extends Model {
    id!: number;
    title!: string;
    year!: number;
    image!: string;
    overview!: string;
  }
  movies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      year: DataTypes.INTEGER,
      image: DataTypes.STRING,
      overview: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'movies',
    }
  );

  return movies;
};

export default init_movies(connection, DataTypes);
