import { FC } from 'react';
import Layout from '@/components/common/Layout/Layout';
import Home from './Home';

type Props = {
  regions: string[];
};

const HomePage: FC<Props> = ({ regions }) => {
  return (
    <Layout>
      <Home regions={regions} />
    </Layout>
  );
};

export default HomePage;
