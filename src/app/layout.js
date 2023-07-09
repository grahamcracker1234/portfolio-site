import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import getAge from "@/lib/getAge";

const inter = Inter({ subsets: ["latin"] });
const age = getAge("2001-09-09");

export const metadata = {
  title: "Graham B. Preston",
  description: `A ${age}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
