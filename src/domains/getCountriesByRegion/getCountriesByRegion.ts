import { Options } from 'ky-universal';
import fetchCountries from '@/domains/fetchCountries';

const getCountrysByRegion = async (region: string, options?: Options) => {
  // レスポンスフィルターはロジックで使用するもののみで固定
  return fetchCountries(
    `v5/region/${encodeURIComponent(region)}`,
    'names.common,names.official,flag.url_png,flag.url_svg,capitals.name',
    options,
  );
};

export default getCountrysByRegion;
