import { Roboto } from '@next/font/google'
import { SessionProvider } from "next-auth/react"
import { fetchAPI } from '@/utils/api/fetch';
import Player from '@/ui/components/global/Player';

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
})

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/Button.scss';

import Layout from '../ui/components/global/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  audios
}) {
  return (
    <SessionProvider session={session}>
      <div className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        {audios && <Player audios={audios} />}
      </div>
    </SessionProvider>
  );
}

App.getInitialProps = async () => {
  const response = await fetchAPI('/audios?sort=id:desc'); // /audios?sort=id:desc&pagination[limit]=25
  const audios = await response.json();
  return { audios }
};