import { useEffect, useRef, useState } from 'react'

//Next/React
import Head from 'next/head';
import Link from 'next/link';

//Components
import Slider from '@/ui/components/global/Slider';
import SliderItem from '@/ui/components/global/Slider/SliderItem';
import SliderPlaylists from '@/ui/components/global/Slider/SliderPlaylists';

import Top10 from '@/ui/components/Top10';
import EventsAll from '@/ui/components/DlessEvents/EventsAll';

//Utils
import { fetchAPI } from '@/utils/api/fetch';
import { first10, playlistNew, dataEvents } from '@/utils/api/QueryParams';

import { getAudios, createAudios } from '@/api'
import { useSession } from 'next-auth/react';

export const getServerSideProps = async () => {
  const first10Resp = await fetchAPI(`/audios?${first10()}`);
  const audioTop = await first10Resp.json();

  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  const playlistNewResp = await fetchAPI(`/playlists?${playlistNew()}`);
  const playlists = await playlistNewResp.json();
  return {
    props: { audioTop, playlists, events },
  };
};

export default function Home({ audioTop, playlists, events }) {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <div className='layout'>
          <div className='layout__left'>
            <div className='slider'>
              <div className='title'>События DLESS</div>
              <Slider buttons={true} pagination={true}>
                {events.data?.map(({ id, attributes }, index) => (
                  <SliderItem key={id}>
                    <Link href={`/events`}>
                      <img
                        className='slides'
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          events.data[index].attributes.poster.data.attributes
                            .url
                        }
                        alt={'image'}
                      />
                      <ul className='slides__list'>
                        <li className='slides__description'>
                          <p className='slides__date'>
                            {attributes.date.slice(8, 10)} Марта
                          </p>
                          <p className='slides__time'>
                            {attributes.time.slice(0, 5)}
                          </p>
                        </li>
                        <li className='slides__description'>
                          <p className='slides__item'>{attributes.title}</p>
                          <p className='slides__item'>{attributes.author}</p>
                        </li>
                      </ul>
                    </Link>
                  </SliderItem>
                ))}
              </Slider>
            </div>
            <div className='playlists'>
              <div className='slider'>
                <div className='title'>Новинки от пользователей</div>
                <Slider buttons={true} pagination={true}>
                  {playlists.data?.map(({ id, attributes }, index) => (
                    <SliderItem key={id}>
                      <Link href={`/playlist/${id}`}>
                        <img
                          className='playlists__image'
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            playlists.data[index].attributes.poster.data
                              .attributes.url
                          }
                          alt={'image'}
                        />
                        <ul className='slides__list'>
                          <h2 className='slides__description'>
                            {
                              playlists.data[index].attributes
                                .users_permissions_user.data.attributes.username
                            }
                          </h2>
                          <li className='slides__item'>{attributes.title}</li>
                        </ul>
                      </Link>
                    </SliderItem>
                  ))}
                </Slider>
              </div>
            </div>
            <EventsAll events={events} />
          </div>
          <div className='layout__right'>
            <Top10 audioTop={audioTop} />
          </div>
        </div>
      </div>
    </>
  );
}
