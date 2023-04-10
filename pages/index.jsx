//Next/React
import Head from 'next/head';
import Link from 'next/link';

//Components
import Slider from '@/ui/components/global/Slider';
import SliderItem from '@/ui/components/global/Slider/SliderItem';

import Top10 from '@/ui/components/Top10';
import EventsAll from '@/ui/components/DlessEvents/EventsAll';

//Utils
import { getAudiosTop, getPlaylistNew, getEvents } from '@/api';

export const getServerSideProps = async () => {
  const audioTop = await getAudiosTop();
  const playlistsNew = await getPlaylistNew();
  const events = await getEvents();

  return {
    props: { audioTop, playlistsNew, events },
  };
};

export default function Home({ audioTop, playlistsNew, events }) {
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
                  {playlistsNew.data?.map(({ id, attributes }, index) => (
                    <SliderItem key={id}>
                      <Link href={`/playlist/${id}`}>
                        <img
                          className='playlists__image'
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            playlistsNew.data[index].attributes.poster.data
                              .attributes.url
                          }
                          alt={'image'}
                        />
                        <ul className='slides__list'>
                          <h2 className='slides__description'>
                            {
                              playlistsNew.data[index].attributes
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
