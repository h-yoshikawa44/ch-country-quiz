import { VFC, useContext } from 'react';
import { css } from '@emotion/react';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { QuizContext } from '@/components/context/QuizContext';
import { fonts, colors } from '@/styles/constants';

type Props = {
  regions: string[];
};

const Home: VFC<Props> = ({ regions }) => {
  const { handleSelectRegion, handleQuizStart } = useContext(QuizContext);

  return (
    <main>
      <QuizCard isImage>
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
              <option key={region} css={regionSelectOption} value={region}>
                {region}
              </option>
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

const formLayout = css`
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
  height: 32px;
  padding: 0 8px;
  border-radius: 8px;
`;

const regionSelectOption = css`
  text-transform: capitalize;
`;

const alignCenter = css`
  text-align: center;
`;

export default Home;
