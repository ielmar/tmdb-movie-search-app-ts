import React from 'react';
import Skeleton from 'react-loading-skeleton';

import MovieItem from './MovieItem';
import MovieItemSkeleton from './MovieItemSkeleton';

const Results = ({
  searchTerm,
  isLoading,
  movies,
}: {
  searchTerm: string;
  isLoading: boolean;
  movies: any[];
}) => {
  return (
    <div className={`${searchTerm ? '' : 'hidden'} mt-20 transition-2`}>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {`Search results for "${searchTerm}"`}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {isLoading
          ? [...Array(8).keys()].map((i) => <MovieItemSkeleton key={i} />)
          : movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Results;
