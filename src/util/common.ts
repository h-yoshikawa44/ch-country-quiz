/**
 * 頭文字を大文字に変換
 * @param {string} str 文字列
 * @returns {string} 頭文字を大文字に変換した文字列
 */
const capitalize = (str: string) => {
  return str.slice(0, 1).toLocaleUpperCase() + str.slice(1);
};

/**
 * 乱数生成
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @returns {number} 乱数
 */
const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * Math.floor(max + 1 - min) + min);

/**
 * 乱数の配列生成
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @param {number} count 生成数
 * @returns {number[]} 乱数の配列
 */
const getRandomNumList = (min: number, max: number, count: number) => {
  let residue = count;
  const numList: number[] = [];
  while (residue > 0) {
    const num = getRandomNum(min, max);

    if (numList.includes(num)) {
      continue;
    }
    numList.push(num);
    residue -= 1;
  }

  return numList;
};

/**
 * 配列のシャッフル（ダステンフェルドの手法）
 * @param {[T]} array 配列
 * @returns {[T]} シャッフル後の配列
 */
const shuffle = <T>(array: T[]) => {
  const arr = array;
  for (let i = arr.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i);
    [arr[k], arr[i - 1]] = [arr[i - 1], arr[k]];
  }

  return arr;
};

/**
 * 配列から重複削除
 * @param {[T]} array 配列
 * @returns {[T]} 重複削除後の配列
 */
const uniq = <T>(array: T[]) => {
  return Array.from(new Set(array));
};

export { capitalize, getRandomNum, getRandomNumList, shuffle, uniq };
