import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuizCard from '@/components/common/QuizCard';
import AnswerButton from '@/components/common/AnswerButton';

const Quiz = () => {
  return (
    <Layout>
      <main>
        <QuizCard isImage>
          <div>
            <p css={cardText}>Kuala Lumpur is the capital of</p>
            <ul css={answerGridList}>
              <li>
                <AnswerButton headText="A">Vietnam</AnswerButton>
              </li>
              <li>
                <AnswerButton headText="B">Malaysia</AnswerButton>
              </li>
              <li>
                <AnswerButton headText="C">Sweden</AnswerButton>
              </li>
              <li>
                <AnswerButton headText="D">Austria</AnswerButton>
              </li>
            </ul>
          </div>
        </QuizCard>
      </main>
    </Layout>
  );
};

const answerGridList = css`
  display: grid;
  row-gap: 24px;
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 32px;
`;

const cardText = css`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: #2f527b;
`;

export default Quiz;
