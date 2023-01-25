import { Roboto_Condensed } from '@next/font/google';
const roboto = Roboto_Condensed({ subsets: ['latin'], weight: '400' });

export default function Button({ children, className, href, ...props }) {
  return (
    <a href={href} {...props}>
      <button className={`${className} ${roboto.className} mr-auto mb-10 rounded border-2 py-2 px-4 uppercase text-gray hover:text-white`}>{children}</button>
    </a>
  );
}