import type { NextPage } from 'next';
import { Fragment } from 'react';

// Components
import { Header, Footer, Items } from '../components/organisms';

import { IItem } from '../shared/interface';

import { loadItems } from '../shared/lib';

interface IItemsPage {
  items: IItem[];
}

const Home: NextPage<IItemsPage> = (props) => {
  return (
    <Fragment>
      <Header />
      <Items items={props.items} />
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
    revalidate: 300, // regenerate page in 5 minutes
  };
}

export default Home;
