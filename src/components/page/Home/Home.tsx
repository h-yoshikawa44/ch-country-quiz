import { VFC, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { fonts, colors } from '@/styles/constants';

type Props = {
  regions: string[];
};

const Home: VFC<Props> = ({ regions }) => {
  const router = useRouter();
  const handleQuizStart = useCallback((e: FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
  }, []);

  return (
    <main>
      <QuizCard isImage>
        <form css={formGrid} onSubmit={handleQuizStart}>
          <label css={cardText} htmlFor="region-select">
            Select region
          </label>
          <select css={regionSelect} name="regions" id="region-select">
            {regions.map((region) => (
              <option key={region} css={regionOption} value={region}>
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

const regionOption = css`
  text-transform: capitalize;
`;

const alignCenter = css`
  text-align: center;
`;

export default Home;
