import '../styles/globals.scss'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Analytics/>
    </main>
  );
}
