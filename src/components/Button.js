import { Roboto_Condensed } from "next/font/google";
const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export default function Button({ children, className, href, ...props }) {
  return (
    <a href={href} {...props} className="!cursor-default !no-underline">
      <button className={`${className} ${roboto.className} mr-auto cursor-pointer rounded border-2 px-4 py-2 uppercase text-gray hover:text-white`}>{children}</button>
    </a>
  );
}