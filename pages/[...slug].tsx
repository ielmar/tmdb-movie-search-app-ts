import React, { useState, useEffect, use } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

import Layout from '@/components/Layout';

import { Movie } from '@/types';

export default function Home() {
  const router = useRouter();
  const slug = router.query.slug?.[0] || '';

  const [title, setTitle] = useState<string>('');
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getMovieInfoById(id: number) {
      const movie = await fetch(`/api?id=${id}`);
      const movieJson = await movie.json();
      setTitle(movieJson?.title);
      setMovie(movieJson);
      setIsLoading(false);
    }
    if (slug) {
      const idFromSlug = slug.split('-').pop() as string;
      const id = parseInt(idFromSlug);
      setIsLoading(true);
      getMovieInfoById(id);
    }
  }, [slug]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-7xl py-22 sm:py-48 lg:py-42">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              {movie?.image ? (
                <Image
                  width={400}
                  height={250}
                  src={movie?.image}
                  alt={movie?.title}
                  className="object-cover object-center"
                />
              ) : (
                <Skeleton width={500} height={300} />
              )}
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {movie?.title ? movie?.title : <Skeleton width={200} />}
              </h2>
              <h3>{movie?.year ? movie?.year : <Skeleton width={100} />}</h3>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-gray-900">{movie?.overview}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
