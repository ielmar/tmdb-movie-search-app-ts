import type { NextApiRequest, NextApiResponse } from 'next';

import { Movie, Movies, Error } from '@/types';
import { create_movie, fetch_movies } from '@/services/dbService';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<String | Movie[] | Error>
) => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        const created_user = await create_movie(req.body);
        res.status(200).json(created_user);
        break;
      }
      case 'GET': {
        const all_movies: Movies = await fetch_movies();
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
    res.status(400).json({
      message: "Sorry, we couldn't process your request.",
    });
  }
};

export default handler;
