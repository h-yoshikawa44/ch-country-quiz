import ky, { Options } from 'ky-universal';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { isCountries } from '@/models/Country';

type QueryParam = {
  fields: string;
};

const getCountriesAll = async (options?: Options) => {
  // レスポンスフィルターはロジックで使用するもののみで固定
  const query: Options & { searchParams: QueryParam } = {
    searchParams: { fields: 'name,flags,capital,region' },
  };
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
    ...query,
  };
  const response = await ky.get('all', mergedOptions);
  const countries = (await response.json()) as unknown[];

  // 最低限の型ガード
  if (!isCountries(countries)) {
    throw Error('API type error');
  }

  return countries;
};

export default getCountriesAll;
