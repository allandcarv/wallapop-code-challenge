import type { NextPage } from 'next';
import { Fragment } from 'react';

// Components
import { Header, Footer, Main } from '../components/organisms';

import { loadItems } from '../shared/lib';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
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
