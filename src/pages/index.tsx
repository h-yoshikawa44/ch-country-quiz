import { VFC } from 'react';
import { GetStaticProps } from 'next';
import HomePage from '@/components/page/Home';
import getcountriesAll from '@/domains/getCountriesAll';
import { uniq } from '@/util/common';

type Props = {
  regions: string[];
};

const Home: VFC<Props> = ({ regions }) => {
  return <HomePage regions={regions} />;
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
