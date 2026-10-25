import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { Countries, isCountries, isCountriesResponse } from '@/models/Country';

// 無料プランでの1リクエストあたりの最大取得件数
const PAGE_LIMIT = 100;

type QueryParam = {
  response_fields: string;
  limit: number;
  offset: number;
};

/**
 * ページネーションを辿って、指定パスの国データを全件取得する
 */
const fetchCountries = async (
  path: string,
  responseFields: string,
  options?: Options,
) => {
  const countries: Countries = [];
  let offset = 0;
  let more = true;

  while (more) {
    const query: Options & { searchParams: QueryParam } = {
      searchParams: {
        response_fields: responseFields,
        limit: PAGE_LIMIT,
        offset,
      },
    };
    const mergedOptions = {
      ...DEFAULT_API_OPTIONS,
      ...options,
      ...query,
    };
    const response = await ky.get(path, mergedOptions);
    const json: unknown = await response.json();

    // 最低限の型ガード
    if (!isCountriesResponse(json) || !isCountries(json.data.objects)) {
      throw Error('API type error');
    }

    // 国旗画像がない国（未承認国家など）は国旗クイズで使えないため除外
    countries.push(...json.data.objects.filter((c) => c.flag.url_svg !== ''));
    more = json.data.meta.more;
    offset += json.data.meta.count;
  }

  return countries;
};

export default fetchCountries;
