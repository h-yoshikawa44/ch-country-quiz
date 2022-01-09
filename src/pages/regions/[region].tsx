import { VFC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import RegionQuiz from '@/components/page/regions/Quiz';
import { Countries } from '@/models/Country';
import getCountriesAll from '@/domains/getCountriesAll';
import getCountriesByRegion from '@/domains/getCountriesByRegion';

type Props = {
  countries: Countries;
};

const Quiz: VFC<Props> = ({ countries }) => {
  return <RegionQuiz countries={countries} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countrys = await getCountriesAll();
  const regions = Array.from(
    new Set(
      countrys.map((country) => {
        return country.region;
      })
    )
  ).sort();
  regions.push('all');

  const paths = regions.map((region) => {
    return { params: { region: region.toLocaleLowerCase() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const countries = await getCountriesByRegion(params.region as string);
  return {
    props: {
      countries,
    },
  };
};

export default Quiz;
