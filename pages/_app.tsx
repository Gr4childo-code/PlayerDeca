import { AppContext } from '@/ui/components/global/AppContext';
import { useState } from 'react';
import { Roboto } from '@next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import NextNProgress from 'nextjs-progressbar';

import { SessionProvider } from 'next-auth/react';
import { getAudios } from '@/api';

import Player from '@/ui/components/global/Player';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
});

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/grid.scss';

import Layout from '../ui/components/global/Layout';
import React from 'react';
import { AppProps } from 'next/app';

interface IAppProps {
  Component: AppProps;
  pageProps: AppProps;
  audios: any;
}

export default function App({ Component, pageProps, audios }): React.ReactNode {
  const [audioContext, setAudioContext] = useState<Array<any>>(audios);

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
