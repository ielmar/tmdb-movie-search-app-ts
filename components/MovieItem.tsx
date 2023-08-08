import React from 'react';
import Image from 'next/image';

import { Movie } from '@/types/index';

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <div key={movie.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <Image
          width={300}
          height={300}
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={movie.title}>
              <span aria-hidden="true" className="absolute inset-0" />
              {movie.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{movie.overview}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieItem;
