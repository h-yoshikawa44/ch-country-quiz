export type CountryName = {
  names: {
    common: string;
    official: string;
  };
};

export type CountryFlag = {
  flag: {
    url_png: string;
    url_svg: string;
  };
};

export type CountryCapital = {
  capitals: {
    name: string;
  }[];
};

export type CountryRegion = {
  region?: string;
};

// 前提：レスポンスフィルター names.common, names.official, flag.url_png, flag.url_svg, capitals.name, （任意：region）
export type Country = CountryName &
  CountryFlag &
  CountryCapital &
  CountryRegion;

export type Countries = Country[];

export type CountriesResponse = {
  data: {
    objects: unknown[];
    meta: {
      total: number;
      count: number;
      limit: number;
      offset: number;
      more: boolean;
    };
  };
};

// ロジックで使用するもののみチェック
const isCountry = (arg: unknown): arg is Country => {
  const c = arg as Country;

  return (
    typeof c.names?.common === 'string' &&
    typeof c.names?.official === 'string' &&
    typeof c.flag?.url_png === 'string' &&
    typeof c.flag?.url_svg === 'string' &&
    Array.isArray(c.capitals) &&
    c.capitals.every((ca) => typeof ca.name === 'string') &&
    (typeof c.region === 'undefined' || typeof c.region === 'string')
  );
};

const isCountries = (args: unknown): args is Countries => {
  return Array.isArray(args) && args.every((c) => isCountry(c));
};

const isCountriesResponse = (arg: unknown): arg is CountriesResponse => {
  const r = arg as CountriesResponse;

  return (
    Array.isArray(r?.data?.objects) && typeof r?.data?.meta?.more === 'boolean'
  );
};

export { isCountry, isCountries, isCountriesResponse };
