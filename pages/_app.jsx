

import AppContext from '@/ui/components/global/AppContext';
import { useState, createContext } from 'react';
import { Roboto } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import { fetchAPI } from '@/utils/api/fetch'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Player from '@/ui/components/global/Player'

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
});

import '@/styles/sass/Normalize.scss';
import '@/styles/sass/globals.scss';
import '@/styles/sass/grid.scss';

import Layout from '../ui/components/global/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  audios,
  menu,
}) {
  const [audioContext, setAudioContext] = useState(audios);

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{ audioContext, setAudioContext }}>
        <div className={roboto.className}>
          <Layout menu={menu}>
            <Component {...pageProps} />
          </Layout>

          {audios && <Player audios={audioContext} />}
        </div>
      </AppContext.Provider>
    </SessionProvider>
  );
}

App.getInitialProps = async () => {
  const audiosResp = await fetchAPI(
    '/audios?fields=name,path,author,posterPath&sort=id:desc'
  ); // /audios?sort=id:desc&pagination[limit]=25
  const audios = await audiosResp.json();

  const menuResp = await fetchAPI('/styles?fields=name&pagination[limit]=100');
  const menu = await menuResp.json();

  return { audios, menu };
};
