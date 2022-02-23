import type { NextPage } from 'next';

// Components
import { Header } from '../components/organisms';

import { loadItems } from '../shared/lib';

const Home: NextPage = () => {
  return <Header />;
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
