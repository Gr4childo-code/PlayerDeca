import { useEffect, useState } from 'react';

export default function Player() {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [fullTime, setfullTime] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');

  useEffect(() => {
    setAudio(new Audio('/audio/test.mp3'));
  }, []);

  const play = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      audio.addEventListener('timeupdate', () => {
        let pr = (audio.currentTime / audio.duration) * 100;
        setfullTime(getTimerMusic(audio.duration));
        setCurrentTime(getTimerMusic(audio.currentTime));
        setPercentage(pr);

        if (pr >= 100) {
          audio.currentTime = 0;
          audio.pause();
          setIsPlay(true);
        }
      });

      audio.play();
      return;
    }

    audio.pause();
  };
  const getTimerMusic = (time) => {
    let h = Math.floor(time / (60 * 60)),
      dm = time % (60 * 60),
      m = Math.floor(dm / 60),
      ds = dm % 60,
      s = Math.ceil(ds),
      fullTime;
    if (s === 60) {
      s = 0;
      m = m + 1;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (m === 60) {
      m = 0;
      h = h + 1;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (h === 0) {
      fullTime = m + ':' + s;
    } else {
      fullTime = h + ':' + m + ':' + s;
    }
    return fullTime;
  };

  return (
    <>
      <div className='player'>
        <div className='player-bar'>
          <div className='player-bar__progress'>
            <style jsx>{`
              .player-bar__progress {
                width: ${percentage}%;
              }
            `}</style>
          </div>
        </div>

        <div className='container'>
          <div className='player-box'>
            <div className={`player-box__play ${!isPlay ? 'active' : ''}`} onClick={play}></div>
            <div className='player-box__body'>
              <strong>Author</strong> - names
              <span>
                {currentTime} - {fullTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
