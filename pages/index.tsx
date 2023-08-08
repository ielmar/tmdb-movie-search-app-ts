import styled from 'styled-components';

import Layout from '@/components/Layout';
import Search from '@/components/Search';

const Heading = styled.h2`
  font-weight: 600;
`;

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <Search />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the cinematic universe at #1 Movie Search Engine. Dive into
            a vast collection of films, find new favorites, and connect with
            fellow movie buffs. Stay updated, personalize your watchlist, and
            fuel your passion for film. Your gateway to cinematic magic has
            arrived.
          </p>
        </div>
      </div>
    </Layout>
  );
}
