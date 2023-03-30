
//Next/React
import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';

//Components
import Slider from '@/ui/components/global/Slider';
import SliderItem from '@/ui/components/global/Slider/SliderItem';

import Top10 from '@/ui/components/Top10';
import Toast from '@/ui/components/global/Toast';
import EventsAll from '@/ui/components/DlessEvents/EventsAll';

//Utils
import { fetchAPI } from '@/utils/api/fetch';
import { first10, playlistNew, dataEvents } from '@/utils/api/QueryParams';

//styles
import styles from '@/ui/components/global/Slider/SlidersMainPage.module.scss';

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
  const [list, setList] = useState([]);
  let toastItem = null;

  const showToast = ({ type, title, description }) => {
    toastItem = {
      id: list.length + 1,
      type,
      title,
      description,
    };
    setList([...list, toastItem]);
  };

  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Toast toastlist={list} setList={setList} />
      {/* <button
        onClick={() => {
          showToast({
            type: 'error',
            title: 'Error',
            description: 'API has been deleted',
          });
        }}>
        Error
      </button> */}
      {/* <button
        onClick={() => {
          showToast({
            type: 'warn',
            title: 'Warn',
            description: 'Type password',
          });
        }}>
        Warn
      </button>
      <button
        onClick={() => {
          showToast({
            type: 'success',
            title: 'Success',
            description: 'Complete',
          });
        }}>
        Success
      </button> */}
      <div className='container'>
        <div className='layout'>
          <div className='layout__left'>
            <div className={styles.events}>
              <h2>События DLESS </h2>
              <Slider pagination={true} buttons={true} /* filter={true} */>
                {events.data?.map(({ id, attributes }, index) => (
                  <SliderItem>
                    <Link href={`/events`}>
                      <img
                        className={styles.events__slides}
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          events.data[index].attributes.poster.data.attributes
                            .url
                        }
                        alt={'image'}
                      />
                      <ul className={styles.events__list}>
                        <li key={id} className={styles.description}>
                          <p className={styles.description__date}>
                            {attributes.date.slice(8, 10)} Марта
                          </p>
                          <p className={styles.description__time}>
                            {attributes.time.slice(0, 5)}
                          </p>
                        </li>
                        <li className={styles.description}>
                          <p className={styles.events__item}>
                            {attributes.title}
                          </p>
                          <p className={styles.events__item}>
                            {attributes.author}
                          </p>
                        </li>
                      </ul>
                    </Link>
                  </SliderItem>
                ))}
              </Slider>
            </div>
            <div className={styles.playlists}>
              <h2>Новинки от пользователей</h2>
              <div className={styles.wrapper}>
                <div className={styles.playlists__wrapper}>
                  <Slider pagination={true} buttons={false} /* filter={true} */>
                    {playlists.data?.map(({ id, attributes }, index) => (
                      <SliderItem>
                        <img
                          className={styles.playlists__slides}
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            playlists.data[index].attributes.poster.data
                              .attributes.url
                          }
                          alt={'image'}
                        />
                        <h2 className={styles.playlists__descr}>
                          {
                            playlists.data[1].attributes.users_permissions_user
                              .data.attributes.username
                          }
                        </h2>
                        <ul key={id} className={styles.playlists__list}>
                          <li className={styles.playlists__item}>
                            {attributes.title}
                          </li>
                          {/* <li className={styles.playlists__item}>
                        {
                          attributes.users_permissions_user.data.attributes
                            .username
                        }
                      </li> */}
                        </ul>
                      </SliderItem>
                    ))}
                  </Slider>
                </div>
                <div className={styles.playlists__wrapper}>
                  <Slider pagination={true} buttons={false} /* filter={true} */>
                    {playlists.data?.map(({ id, attributes }, index) => (
                      <SliderItem>
                        <img
                          className={styles.playlists__slides}
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            playlists.data[index].attributes.poster.data
                              .attributes.url
                          }
                          alt={'image'}
                        />
                        <h2 className={styles.playlists__descr}>
                          {
                            playlists.data[1].attributes.users_permissions_user
                              .data.attributes.username
                          }
                          <ul key={id} className={styles.playlists__list}>
                            <li className={styles.playlists__item}>
                              {attributes.title}
                            </li>
                            {/* <li className={styles.playlists__item}>
                        {
                          attributes.users_permissions_user.data.attributes
                            .username
                        }
                      </li> */}
                          </ul>
                        </h2>
                      </SliderItem>
                    ))}
                  </Slider>
                </div>
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
