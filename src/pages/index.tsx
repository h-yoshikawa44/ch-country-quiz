import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';

const Home = () => {
  return (
    <Layout>
      <main>
        <QuizCard isImage>
          <form css={formGrid}>
            <label css={cardText} htmlFor="region-select">
              Select region
            </label>
            <select css={regionSelect} name="regions" id="region-select">
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
              <option value="all">All</option>
            </select>
            <div css={alignCenter}>
              <Button>Start</Button>
            </div>
          </form>
        </QuizCard>
      </main>
    </Layout>
  );
};

const formGrid = css`
  display: grid;
  row-gap: 24px;
`;

const cardText = css`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: #2f527b;
`;

const regionSelect = css`
  display: block;
  width: 100%;
`;

const alignCenter = css`
  text-align: center;
`;

export default Home;
