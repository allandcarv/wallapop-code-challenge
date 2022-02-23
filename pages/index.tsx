import type { NextPage } from 'next';

import { loadItems } from '../shared/lib';

const Home: NextPage = () => {
  return <h1>Wallapop Code Challenge</h1>;
};

export async function getStaticProps() {
  const { items } = await loadItems();

  return {
    props: {
      items,
    },
    revalidate: 3600,
  };
}

export default Home;
