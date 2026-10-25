import { Options } from 'ky';
import fetchCountries from '@/domains/fetchCountries';

const getCountriesAll = async (options?: Options) => {
  // レスポンスフィルターはロジックで使用するもののみで固定
  return fetchCountries(
    'v5',
    'names.common,names.official,flag.url_png,flag.url_svg,capitals.name,region',
    options,
  );
};

export default getCountriesAll;
