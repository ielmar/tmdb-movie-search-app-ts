import React, { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, FilmIcon } from '@heroicons/react/24/outline';
import Skeleton from 'react-loading-skeleton';

import MovieItem from './MovieItem';
import { Movies } from '@/types/index';

const movies = [
  {
    id: 1,
    title: 'Nomad Tumbler',
    color: 'White',
    year: 2022,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    overview: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    title: 'Nomad Tumbler',
    color: 'White',
    year: 2023,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    overview: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 3,
    title: 'Nomad Tumbler',
    color: 'White',
    year: 1998,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    overview: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 4,
    title: 'Nomad Tumbler',
    color: 'White',
    year: 1999,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    overview: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 5,
    title: 'Nomad Tumbler',
    color: 'White',
    year: 2001,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    overview: 'Insulated bottle with white base and black snap lid.',
  },
];

const Results = ({ searchTerm }: { searchTerm: string }) => {
  const [isLoaading, setIsLoading] = useState(false);

  return (
    <div className={`${searchTerm ? '' : 'hidden'} mt-20 transition-2`}>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {`Search results for "${searchTerm}"`}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {isLoaading && <>test</>}
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Results;
