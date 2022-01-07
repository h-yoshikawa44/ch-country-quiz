import { VFC } from 'react';
import { css } from '@emotion/react';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { fonts, colors } from '@/styles/constants';

const Home: VFC = () => {
  return (
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
  );
};

const formGrid = css`
  display: grid;
  row-gap: 24px;
`;

const cardText = css`
  font-family: ${fonts.poppins};
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: ${colors.navy2};
`;

const regionSelect = css`
  display: block;
  width: 100%;
`;

const alignCenter = css`
  text-align: center;
`;

export default Home;
