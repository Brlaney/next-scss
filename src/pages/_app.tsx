import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/css/uikit.css';
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
        <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
export default MyApp
