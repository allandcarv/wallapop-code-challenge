import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useState } from 'react';

// Components
import { Header, Footer, Items, FavoritesModal } from '../components/organisms';

import { IItem } from '../shared/interface';

import { loadItems } from '../shared/lib';

interface IItemsPage {
  items: IItem[];
}

const Home: NextPage<IItemsPage> = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Wallapop Code Challenge</title>
        <meta
          property="og:title"
          content="Wallapop Code Challenge"
          key="title"
        />
      </Head>
      <FavoritesModal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <Header onGenericAction={() => setOpenModal(true)} />
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
    revalidate: 300, // regenerate page every 5 minutes
  };
}

export default Home;
