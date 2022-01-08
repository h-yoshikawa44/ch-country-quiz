import { VFC } from 'react';
import { GetStaticProps } from 'next';
import HomePage from '@/components/page/Home';
import getcountriesAll from '@/domains/getCountriesAll';

type Props = {
  regions: string[];
};

const Home: VFC<Props> = ({ regions }) => {
  return <HomePage regions={regions} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const countries = await getcountriesAll();
  const regions = Array.from(
    new Set(
      countries.map((country) => {
        return country.region;
      })
    )
  ).sort();
  regions.push('all');

  return {
    props: {
      regions,
    },
  };
};

export default Home;
