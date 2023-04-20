import AppContext from '@/ui/components/global/AppContext';
import { useState } from 'react';
import { Roboto } from '@next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import NextNProgress from 'nextjs-progressbar';

import { SessionProvider } from 'next-auth/react';
import { getAudios } from '@/api';

import Player from '@/ui/components/global/Player';

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
});

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/grid.scss';

import Layout from '../ui/components/global/Layout';

export default function App({ Component, pageProps, audios }) {
  const [audioContext, setAudioContext] = useState(null);

  return (
    <SessionProvider session={pageProps?.session}>
      <AppContext.Provider value={{ audioContext, setAudioContext }}>
        <div className={roboto.className}>
          <Layout>
            <NextNProgress color='#e92a67' height={3} showOnShallow={false} />
            <Component {...pageProps} />
          </Layout>

          {audios && <Player audios={audioContext} />}
        </div>
      </AppContext.Provider>
    </SessionProvider>
  );
}

App.getInitialProps = async () => {
  const audios = await getAudios();

  return { audios };
};
