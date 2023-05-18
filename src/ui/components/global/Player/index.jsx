import { useEffect, useState, useRef } from 'react';
import { AudioInit, AudioTime } from './player';

import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faPlus,
  faArrowsSplitUpAndLeft,
  faRepeat,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import styles from '@/src/ui/components/global/Player/Player.module.scss';
import { useAppSelector, useAppDispatch } from '@/src/redux/hooks/hooks';
import {
  selectAudios,
  getAudiosProvider,
  setCurrentAudio,
} from '@/src/redux/audios/audios';

export default function Player() {
  const dispatch = useAppDispatch();
  const { audios, currentAudio } = useAppSelector(selectAudios);
  const [audio, setAudio] = useState(null);
  const [isPlayMove, setIsPlayMove] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [fullTime, setFullTime] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTimeMove, setCurrentTimeMove] = useState('00:00');
  const [volume, setVolume] = useState(80);
  const [volumeMove, setVolumeMove] = useState(false);
  const [isPlayList, setIsPlayList] = useState(false);
  const [trackInfo, setTrackInfo] = useState('');
  const [isNav, setIsNav] = useState(false);
  const track = useRef();
  const _indexTrach = useRef(0);

  useEffect(() => {
    dispatch(getAudiosProvider()).then((status) => {
      track.current = {
        id: status.payload?.data[0]?.id,
        ...status.payload?.data[0]?.attributes,
        src: status.payload?.data[0]?.attributes?.src?.data[0]?.attributes
          ?.hash,
        poster:
          status.payload?.data[0]?.attributes?.poster?.data?.attributes?.url,
      };
      setAudio(AudioInit(track.current));

      setTrackInfo({
        id: track.current.id,
        name: track.current.name,
        author: track.current.author,
        poster: track.current.poster,
      });
    });
  }, []);

  useEffect(() => {
    if (
      audios?.data[0]?.id !== track?.current?.id &&
      track?.current?.id !== undefined
    ) {
      track.current = {
        id: audios?.data[0]?.id,
        ...audios?.data[0]?.attributes,
        src: audios?.data[0]?.attributes?.src?.data[0]?.attributes?.hash,
        poster: audios?.data[0]?.attributes?.poster?.data?.attributes?.url,
      };
      audio.pause();
      setIsPlay(false);
      setPercentage(0);

      setAudio(AudioInit(track.current));
      setTrackInfo({
        id: track.current.id,
        name: track.current.name,
        author: track.current.author,
        poster: track.current.poster,
      });
    }
  }, [currentAudio]);

  useEffect(() => {
    audio?.addEventListener('canplaythrough', () => {
      setFullTime(AudioTime(audio.duration));
    });

    audio?.addEventListener('timeupdate', () => {
      setPercentage((audio.currentTime / audio.duration) * 100);
      setCurrentTime(AudioTime(audio.currentTime));
    });

    audio?.addEventListener('ended', () => {
      _indexTrach.current < audios?.data.length - 1
        ? _indexTrach.current++
        : (_indexTrach.current = 0);
      nextTrack(
        audios?.data[_indexTrach.current]?.id,
        audios?.data[_indexTrach.current]?.attributes
      );
      setTrackInfo({
        id: track.current.id,
        name: track.current.name,
        author: track.current.author,
        poster: track.current.poster,
      });
    });
  }, [audio ?? null]);

  const play = () => {
    audio?.paused
      ? [audio.play(), setIsPlay(true)]
      : [audio.pause(), setIsPlay(false)];
  };

  const rewind = (e, active) => {
    setIsPlayMove(active);

    const rect = e.target.getBoundingClientRect();
    const pageX = e.pageX;

    e.target.children[0].style.width = `${(pageX / rect.width) * 100}%`;
    setCurrentTimeMove(AudioTime((e.pageX / rect.width) * audio?.duration));

    if (active) {
      const rewind = (pageX / rect.width) * audio.duration;

      audio.currentTime = rewind;
      audio.muted = true;
      return;
    }
    audio.muted = false;
  };

  const volumeTrack = (e, active) => {
    setVolumeMove(active);

    if (active) {
      const rect = e.target.getBoundingClientRect();
      const offesetX = e.pageX - rect.left;
      const offsetVolume = offesetX / 100;

      setVolume(Math.floor(offesetX));
      audio.volume = offsetVolume < 0 ? 0 : offsetVolume;
    }
  };

  const nextTrack = (id, attributes) => {
    track.current = {
      id,
      ...attributes,
      src: attributes?.src?.data[0]?.attributes?.hash,
      poster: attributes?.poster?.data?.attributes?.url,
    };
    setTrackInfo({
      id: track.current.id,
      name: track.current.name,
      author: track.current.author,
      poster: track.current.poster,
    });
    audio.src = `${process.env.NEXT_PUBLIC_API_URL}/uploads/${track.current?.src}.mp3`;
    play();
  };

  return (
    <>
      <Head>
        <title>
          {!audio
            ? 'Трек не выбран'
            : `${trackInfo.author} - ${trackInfo.name}`}
        </title>
        <link
          rel='apple-touch-icon'
          href={`${process.env.NEXT_PUBLIC_API_URL}${track?.current?.poster}`}
        />
      </Head>
      <div className={styles.player}>
        <div
          className={styles.playerBar}
          onMouseMove={(e) => rewind(e, isPlayMove)}
          onMouseDown={(e) => rewind(e, true)}
          onMouseUp={(e) => rewind(e, false)}
          onMouseLeave={(e) => rewind(e, false)}
        >
          <div
            className={styles.playerBar__progressMove}
            time={currentTimeMove}
          ></div>
          <div
            className={styles.playerBar__progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className='container'>
          <div className={styles.playerBox}>
            <div className={styles.playerBox__cover}>
              {!audio ? (
                ''
              ) : trackInfo.poster ? (
                <img src={process.env.NEXT_PUBLIC_API_URL + trackInfo.poster} />
              ) : (
                <FontAwesomeIcon icon={faMusic} />
              )}

              <div
                className={`${styles.playerBox__play} ${
                  isPlay ? styles.active : ''
                }`}
                onClick={play}
              ></div>
            </div>
            <div className={styles.playerBox__body}>
              {audio && (
                <div
                  className={styles.playerBox__info}
                  onClick={() => setIsPlayList(!isPlayList)}
                >
                  <div className={styles.playerBox__info__description}>
                    <strong>{track.current.author}</strong> - {trackInfo.name}
                  </div>
                  <span>
                    {currentTime} / {fullTime}
                  </span>
                </div>
              )}

              <div
                className={`${styles.playlist} ${
                  isPlayList ? styles.playlist__active : ''
                }`}
              >
                <div className={styles.playlist__overflow}>
                  {audio &&
                    audios?.data.map(({ id, attributes }, index) => (
                      <div
                        className={`${styles.playlist__item} ${
                          trackInfo?.id === id
                            ? styles.playlist__item_active
                            : ''
                        }`}
                        key={id}
                        onClick={() => {
                          nextTrack(id, attributes),
                            (_indexTrach.current = index);
                        }}
                      >
                        <div className={styles.playlist__cover}>
                          {attributes?.poster?.data?.attributes?.url ? (
                            <img
                              src={
                                process.env.NEXT_PUBLIC_API_URL +
                                attributes?.poster?.data?.attributes?.url
                              }
                            />
                          ) : (
                            <FontAwesomeIcon icon={faMusic} />
                          )}
                          <div className={styles.playlist__cover_active}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <div className={styles.playlist__info}>
                          <strong>{attributes?.author}</strong> - {''}
                          {attributes?.name}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div
              className={
                !isNav ? styles.playerTools : styles.playerToolsMob__active
              }
            >
              <div
                className={styles.playerVolume}
                onMouseMove={(e) => volumeTrack(e, volumeMove)}
                onMouseDown={(e) => volumeTrack(e, true)}
                onMouseUp={(e) => volumeTrack(e, false)}
                onMouseLeave={(e) => volumeTrack(e, false)}
              >
                <div
                  className={styles.playerVolume__progress}
                  style={{ width: `${volume}%` }}
                ></div>
              </div>

              <div hint='Добавить в мою музыку' className={styles.playerBtn}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div
                hint='Перемешать и воспроизвести'
                className={styles.playerBtn}
              >
                <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />
              </div>
              <div hint='Повторять' className={styles.playerBtn}>
                <FontAwesomeIcon icon={faRepeat} />
              </div>
            </div>
            <div className={styles.playerToolsMob}>
              <div
                className={styles.playerBtn}
                hint={!isNav ? 'Открыть' : 'Закрыть'}
              >
                <FontAwesomeIcon
                  icon={!isNav ? faBars : faTimes}
                  onClick={() => setIsNav(!isNav)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}