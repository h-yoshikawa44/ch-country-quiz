import { VFC, Fragment } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import HomePage from '@/components/page/Home';
import getcountriesAll from '@/domains/getCountriesAll';
import { uniq } from '@/util/common';

type Props = {
  regions: string[];
};

const Home: VFC<Props> = ({ regions }) => {
  return (
    <Fragment>
      <Head>
        <title>Country quiz</title>
        <meta
          name="description"
          content="devChallenges.io(legacy) - Country quiz | by h-yoshikawa44"
        />
      </Head>
      <HomePage regions={regions} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const countries = await getcountriesAll();
  const regions = uniq(
    countries.map((country) => {
      return country.region;
    })
  ).sort();
  regions.unshift('all');

  return {
    props: {
      regions,
    },
  };
};

export default Home;
