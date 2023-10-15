import { Poppins, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
});
