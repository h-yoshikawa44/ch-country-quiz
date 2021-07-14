import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuizCard from '@/components/common/QuizCard';

const Home = () => {
  return (
    <Layout>
      <main>
        <QuizCard isImage>
          <form>
            <label css={cardText} htmlFor="region-select">
              Select region
            </label>
            <select css={regionSelect} name="regions" id="region-select">
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </QuizCard>
      </main>
    </Layout>
  );
};

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

export default Home;
