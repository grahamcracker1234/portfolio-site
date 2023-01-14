import { Roboto_Condensed } from '@next/font/google';
const roboto = Roboto_Condensed({ subsets: ['latin'], weight: '400' });
import Link from 'next/link';

export default function Button({ text, href, ...props }) {
  return (
    <a href={href} {...props}>
      <button className={`${roboto.className} text-gray uppercase border-2 rounded mr-auto py-2 px-4 mb-10`}>{text}</button>
    </a>
  );
}