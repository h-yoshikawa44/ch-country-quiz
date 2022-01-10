import { VFC, Fragment } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import RegionQuiz from '@/components/page/regions/Quiz';
import { Countries } from '@/models/Country';
import getCountriesAll from '@/domains/getCountriesAll';
import getCountriesByRegion from '@/domains/getCountriesByRegion';

type Props = {
  countries: Countries;
};

const Quiz: VFC<Props> = ({ countries }) => {
  return (
    <Fragment>
      <Head>
        <title>Quiz - Country quiz</title>
        <meta
          name="description"
          content="devChallenges.io - Country quiz - Quiz | by h-yoshikawa44"
        />
      </Head>
      <RegionQuiz countries={countries} />
    </Fragment>
  );
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
  regions.unshift('all');

  const paths = regions.map((region) => {
    return { params: { region: region.toLocaleLowerCase() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const region = params.region as string;
  let countries;
  if (region === 'all') {
    countries = await getCountriesAll();
  } else {
    countries = await getCountriesByRegion(params.region as string);
  }

  return {
    props: {
      countries,
    },
  };
};

export default Quiz;
