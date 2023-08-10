import React from 'react';
import Skeleton from 'react-loading-skeleton';

const MovieItemSkeleton = () => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <Skeleton width={300} height={300} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Skeleton width={200} />
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            <Skeleton width={200} />
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          <Skeleton width={100} />
        </p>
      </div>
    </div>
  );
};

export default MovieItemSkeleton;
