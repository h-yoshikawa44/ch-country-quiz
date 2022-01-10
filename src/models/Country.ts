export type CountryName = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
};

export type CountryFrags = {
  flags: {
    png: string;
    svg: string;
  };
};

export type CountryCapital = {
  capital: string[];
};

export type CountryRegion = {
  region?: string;
};

// 前提：レスポンスフィルター name, flags, capital, （任意：region）
export type Country = CountryName &
  CountryFrags &
  CountryCapital &
  CountryRegion;

export type Countries = Country[];

// ロジックで使用するもののみチェック
const isCountry = (arg: unknown): arg is Country => {
  const c = arg as Country;

  return (
    typeof c.name.common === 'string' &&
    typeof c.name.official === 'string' &&
    typeof c.flags.png === 'string' &&
    typeof c.flags.svg === 'string' &&
    c.capital.every((ca) => typeof ca === 'string') &&
    (typeof c.region === 'undefined' || typeof c.region === 'string')
  );
};

const isCountries = (args: unknown): args is Countries => {
  const cs = args as Countries;

  return cs.every((c) => isCountry(c));
};

export { isCountry, isCountries };
