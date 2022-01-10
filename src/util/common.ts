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
  let numList: number[] = [];
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
  let arr = array;
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

export { getRandomNum, getRandomNumList, shuffle, uniq };
