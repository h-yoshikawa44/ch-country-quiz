// ブレイクポイント
const xs = 0;
const sm = 600;
const md = 960;
const lg = 1280;
const xl = 1920;

const custom = 520;

export const breakPoint = {
  xs,
  sm,
  md,
  lg,
  xl,
  custom,
} as const;

// 色
const gray = '#f2f2f2';
const white = '#fff';

const navy1 = '#1d355d';
const navy2 = '#2f527b';
const blue = '#6066D0';
const green = '#60bf88';
const red = '#ea8282';
const orange = '#f9a826';

const primary = orange;
const secondary = blue;
const correct = green;
const wrong = red;

export const colors = {
  gray,
  white,
  navy1,
  navy2,
  blue,
  green,
  red,
  orange,
  primary,
  secondary,
  correct,
  wrong,
} as const;

// 色の変化
const buttonDarken = 0.15;
const buttonTextAlpha = 0.8;
const buttonBorderAlpha = 0.7;

export const colorRatios = {
  buttonDarken,
  buttonTextAlpha,
  buttonBorderAlpha,
} as const;
