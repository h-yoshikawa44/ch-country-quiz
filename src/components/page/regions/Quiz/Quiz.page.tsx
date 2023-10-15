import { FC } from 'react';
import Layout from '@/components/common/Layout/Layout';
import Quiz from './Quiz';
import { Countries } from '@/models/Country';

type Props = {
  countries: Countries;
};

const QuizPage: FC<Props> = ({ countries }) => {
  return (
    <Layout>
      <Quiz countries={countries} />
    </Layout>
  );
};

export default QuizPage;
