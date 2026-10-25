import { Options } from 'ky-universal';

export const DEFAULT_API_OPTIONS: Options = {
  prefix: 'https://api.restcountries.com/countries',
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
  retry: 0,
};
