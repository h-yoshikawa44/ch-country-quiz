import { color } from 'csx';

/**
 * 色情報 + 透明度をもとにした RGBA 値を文字列で取得
 * @param colorValue - 色情報（16進数カラーコード値 or CSS カラー関数）
 * @param alpha - 透明度（% or 少数値）
 * @return - RGBA 値の文字列
 */
export const createRGBAColor = (
  colorValue: string,
  alpha: string | number = 0
): string => {
  return color(colorValue).fade(alpha).toString();
};

/**
 * 色情報 + 暗さをもとにした HEX 値を文字列で取得
 * @param colorValue - 色情報（16進数カラーコード値 or CSS カラー関数）
 * @param darkenValue - 暗さ（% or 0~1の少数値）
 * @param relative - 相対的にするか
 * @return - HEX 値の文字列
 */
export const createDarkenColor = (
  colorValue: string,
  darkenValue: number | string = 0,
  relative: boolean = false
): string => {
  return color(colorValue).darken(darkenValue, relative).toHexString();
};
