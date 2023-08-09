import { movies } from '../database/models';
import { Movie, Movies } from '../types';

export async function create_movie({ title, image, year, overview }: Movie) {
  const users = await movies.create({
    title,
    year,
    image,
    overview,
  });
  return users.dataValues;
}

export async function fetch_movies() {
  const moviesResult: Movies = await movies.findAll();
  return moviesResult;
}
