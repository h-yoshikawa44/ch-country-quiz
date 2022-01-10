export type QuizMode = 'loading' | 'question' | 'solution' | 'result';

export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  text: string;
  questionFlag: string;
  answers: Answer[];
};

export type AnswerStatus = 'correct' | 'wrong' | 'none';
