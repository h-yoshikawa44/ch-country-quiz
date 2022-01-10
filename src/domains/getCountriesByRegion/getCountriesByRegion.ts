import ky, { Options } from 'ky-universal';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { isCountries } from '@/models/Country';

type QueryParam = {
  fields: string;
};

const getCountrysByRegion = async (region: string, options?: Options) => {
  // レスポンスフィルターはロジックで使用するもののみで固定
  const query: Options & { searchParams: QueryParam } = {
    searchParams: { fields: 'name,flags,capital' },
  };
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
    ...query,
  };
  const response = await ky.get(`region/${region}`, mergedOptions);
  const countrys = (await response.json()) as unknown[];

  // 最低限の型ガード
  if (!isCountries(countrys)) {
    throw Error('API type error');
  }

  return countrys;
};

export default getCountrysByRegion;
