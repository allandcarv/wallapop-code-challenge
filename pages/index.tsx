import type { NextPage } from 'next';

// Components
import { Heading } from '../components/atoms';
import { loadItems } from '../shared/lib';

const Home: NextPage = () => {
  return <Heading level="first">Wallapop Code Challenge</Heading>;
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
