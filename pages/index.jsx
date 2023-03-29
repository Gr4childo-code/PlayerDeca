//Next/React
import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';

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
import styles from '@/ui/components/global/Slider/Slider.module.scss';

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
      </button>
      <button
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
            <div className={styles.wrapperMain}>
              <h2>
                Новинки от{' '}
                {
                  playlists.data[0].attributes.users_permissions_user.data
                    .attributes.username
                }
              </h2>
              <Slider pagination={true} buttons={true} /* filter={true} */>
                <SliderItem>
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[0].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[0].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
                <SliderItem>
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[1].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[1].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
                <SliderItem>
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[2].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[2].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
              </Slider>
            </div>
            <div className={styles.wrapperMain}>
              <h2>
                Новинки от{' '}
                {
                  playlists.data[0].attributes.users_permissions_user.data
                    .attributes.username
                }
              </h2>
              <Slider pagination={true} buttons={true} /* filter={true} */>
                <SliderItem>
                  <img
                    className={styles.wrapper__slides}
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      playlists.data[0].attributes.poster.data.attributes.url
                    }
                    alt={'image'}
                  />
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[0].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[0].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
                <SliderItem>
                  <img
                    className={styles.wrapper__slides}
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      playlists.data[1].attributes.poster.data.attributes.url
                    }
                    alt={'image'}
                  />
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[1].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[1].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
                <SliderItem>
                  <img
                    className={styles.wrapper__slides}
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      playlists.data[2].attributes.poster.data.attributes.url
                    }
                    alt={'image'}
                  />
                  {playlists.data?.map(({ id, attributes }) => (
                    <ul key={id} className={styles.wrapper__list}>
                      <li>{playlists.data[2].attributes.title}</li>
                      <li className={styles.wrapper__item}>
                        {
                          playlists.data[2].attributes.users_permissions_user
                            .data.attributes.username
                        }
                      </li>
                    </ul>
                  ))}
                </SliderItem>
              </Slider>
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
