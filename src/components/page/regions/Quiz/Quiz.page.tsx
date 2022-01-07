import { VFC } from 'react';
import Layout from '@/components/common/Layout/Layout';
import Quiz from './Quiz';

const QuizPage: VFC = () => {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
};

export default QuizPage;
