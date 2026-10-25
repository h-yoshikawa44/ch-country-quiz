import { Options } from 'ky-universal';

export const DEFAULT_API_OPTIONS: Options = {
  prefix: 'https://restcountries.com/v3.1',
  retry: 0,
};
