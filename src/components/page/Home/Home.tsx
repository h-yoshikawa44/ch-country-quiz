import { FC, useContext } from 'react';
import { css } from '@emotion/react';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { QuizContext } from '@/components/context/QuizContext';
import { colors } from '@/styles/constants';
import { poppins } from '@/styles/fonts';
import { capitalize } from '@/util/common';

type Props = {
  regions: string[];
};

const Home: FC<Props> = ({ regions }) => {
  const { handleSelectRegion, handleQuizStart } = useContext(QuizContext);

  return (
    <main>
      <QuizCard isImage>
        <p css={cardTextDescription}>
          How many questions can you answer correctly in a row?
        </p>
        <form css={formLayout} onSubmit={handleQuizStart}>
          <label css={cardText} htmlFor="region-select">
            Select region
          </label>
          <select
            css={regionSelect}
            name="regions"
            id="region-select"
            onChange={handleSelectRegion}
          >
            {regions.map((region) => (
              <option key={region}>{capitalize(region)}</option>
            ))}
          </select>
          <div css={alignCenter}>
            <Button type="submit">Start</Button>
          </div>
        </form>
      </QuizCard>
    </main>
  );
};

const cardTextDescription = css`
  font-family: ${poppins.style.fontFamily};
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
  color: ${colors.navy2};
`;

const formLayout = css`
  display: grid;
  row-gap: 24px;
  margin-top: 24px;
`;

const cardText = css`
  font-family: ${poppins.style.fontFamily};
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: ${colors.navy2};
`;

const regionSelect = css`
  display: block;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border-radius: 8px;
`;

const alignCenter = css`
  text-align: center;
`;

export default Home;
