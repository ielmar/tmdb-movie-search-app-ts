import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, FilmIcon } from '@heroicons/react/24/outline';

const sampleMovieNames = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'X-Files',
  'The Witcher',
  "The Devil's Advocate",
];

const Search = ({
  setSearchTerm,
  searchTerm,
}: {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}) => {
  return (
    <div className="sm:mb-8 flex justify-center flex-col px-40">
      <div className="flex mb-28 justify-center">
        <FilmIcon className="h-16 w-16 text-gray-900 mr-5" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          #1 Movie Search Engine
        </h1>
      </div>
      <div className="flex mb-5">
        <input
          type="text"
          placeholder={searchTerm || 'Type the movie you want to find...'}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded px-5 py-5 text-4xl w-full border outline-none placeholder-gray-400 text-gray-900 focus:ring-1 focus:ring-offset-1 focus:ring-gray-900/20 focus:ring-offset-gray-900/10"
        />
      </div>
      <div className="relative rounded-2xl px-1 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10">
        {sampleMovieNames.map((movieName) => (
          <button
            type="button"
            key={movieName}
            onClick={() => setSearchTerm(movieName)}
            className="bg-indigo-300 hover:bg-indigo-400 text-black hover:text-white rounded py-1 px-2 m-1"
          >
            {movieName}{' '}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
