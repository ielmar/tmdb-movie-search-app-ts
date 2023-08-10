import { Op } from 'sequelize';

import { Movie } from '@/db/models/Movie';

export async function createMovie({
  id,
  title,
  year,
  image,
  overview,
}: {
  id: number;
  title: string;
  year: number;
  image: string;
  overview: string;
}) {
  const movie = new Movie({
    id,
    title,
    year,
    image,
    overview,
  });
  await movie.save();
  return movie.dataValues;
}

export async function fetchMovies(search?: string) {
  const moviesResult: Movie[] = await Movie.findAll({
    where: {
      title: {
        [Op.like]: `%${search}%`,
      },
    },
  });
  return moviesResult;
}

export async function fetchMovieById(id: number) {
  const movieResult: Movie | null = await Movie.findByPk(id);
  return movieResult;
}
