import '../styles/globals.scss'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`bg-midnight ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
