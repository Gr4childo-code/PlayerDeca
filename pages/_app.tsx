import { AppContext } from '@/src/ui/components/global/AppContext';
import { useState } from 'react';
import { Roboto } from '@next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import NextNProgress from 'nextjs-progressbar';

import { SessionProvider } from 'next-auth/react';
import { getAudios } from '@/api';

import Player from '@/src/ui/components/global/Player';

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

import Layout from '@/src/ui/components/global/Layout';
import React from 'react';

interface IAppProps {
  Component: any;
  pageProps: any;
  audios: IAudios;
}

export default function App({
  Component,
  pageProps,
  audios,
}: IAppProps): React.ReactNode {
  const [audioContext, setAudioContext] = useState(audios);

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
