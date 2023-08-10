import React, { useState, useEffect, use } from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Search from '@/components/Search';
import Results from '@/components/Results';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function searchForTitle(searchTerm: string) {
      const movies = await fetch(`/api?search=${searchTerm}`);
      const moviesJson = await movies.json();
      setMovies(moviesJson);
    }
    if (searchTerm) {
      setTitle(`Search results for "${searchTerm}" | #1 Movie Search Engine`);

      setIsLoading(true);
      searchForTitle(searchTerm);
    } else {
      setTitle('#1 Movie Search Engine');
    }
  }, [searchTerm]);

  useEffect(() => {
    if (movies.length > 0) {
      setIsLoading(false);
    }
  }, [movies]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-7xl py-22 sm:py-48 lg:py-42">
        <div className="text-center">
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          {!searchTerm && (
            <p className="mt-10 text-lg leading-8 text-gray-600">
              Discover the cinematic universe at #1 Movie Search Engine. Dive
              into a vast collection of films, find new favorites, and connect
              with fellow movie buffs. Stay updated, personalize your watchlist,
              and fuel your passion for film. Your gateway to cinematic magic
              has arrived.
            </p>
          )}
        </div>
        <Results
          movies={movies}
          isLoading={isLoading}
          searchTerm={searchTerm}
        />
      </div>
    </Layout>
  );
}
