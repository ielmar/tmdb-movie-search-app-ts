import type { NextApiRequest, NextApiResponse } from 'next';
import { sequelize } from '@/db/sequelize';
import { Movie } from '@/db/models/Movie';
import { createMovie, fetchMovieById, fetchMovies } from '@/services/dbService';

import { Movies } from '@/types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<String | Object | null | Movie | Movies | Error>
) => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        const created_user = await createMovie(req.body);
        res.status(200).json(created_user);
        break;
      }
      case 'GET': {
        const { query } = req;
        const { search, id } = query;
        await sequelize.sync({ force: true });
        // if (id) {
        //   console.log('id', id);
        //   const movie: Movie | null = await fetchMovieById(Number(id));
        //   if (!movie) {
        //     const searchResultsFromRemoteAPI = await fetch(
        //       `https://api.themoviedb.org/3/search/movie?query=titanic&include_adult=false&language=en-US&page=1`,
        //       options
        //     );
        //     console.log(searchResultsFromRemoteAPI);
        //     // .then((response) => response.json())
        //     // .then((response) => console.log(response))
        //     // .catch((err) => console.error(err));
        //     if (searchResultsFromRemoteAPI.status === 200) {
        //       const searchResults = await searchResultsFromRemoteAPI.json();
        //       console.log(searchResults);
        //       res.status(200).json(searchResults);
        //     } else {
        //       res.status(500).json({
        //         message: 'Something went wrong',
        //       });
        //     }
        //     break;
        //   }
        //   res.status(200).json(movie);
        //   break;
        // }
        const all_movies = await fetchMovies(search as string);
        if (all_movies.length === 0) {
          const searchResultsFromRemoteAPI = await fetch(
            `${process.env.TMDB_API_URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
            options
          );
          console.log(searchResultsFromRemoteAPI);
          if (searchResultsFromRemoteAPI.status === 200) {
            const searchResults = await searchResultsFromRemoteAPI.json();
            searchResults.results.forEach(async (movie: any) => {
              const movieObj = {
                title: movie.title,
                year: movie.release_date.split('-')[0],
                image: `${process.env.TMDB_IMAGE_URL}w500${movie.poster_path}`,
                overview: movie.overview,
              };
              await createMovie(movieObj);
            });
            const movies: Movies = searchResults.results.map((movie: any) => {
              return {
                id: movie.id,
                title: movie.title,
                year: movie.release_date.split('-')[0],
                image: `${process.env.TMDB_IMAGE_URL}w500${movie.poster_path}`,
                overview: movie.overview,
              };
            });
            console.log(movies);
            res.status(200).json(movies);
          } else {
            res.status(500).json({
              message: 'Something went wrong',
            });
          }
          break;
        }
        res.status(200).json(all_movies);
        break;
      }
      case 'PUT': {
        res.status(200).send('We Secured the PUT API End Point');
        break;
      }
      case 'DELETE': {
        res.status(200).send('We Secured the DELETE API End Point');
        break;
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Sorry, we couldn't process your request.",
    });
  }
};

export default handler;
