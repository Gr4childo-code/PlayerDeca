import Cards from './Cards';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider() {
  const musicData = [
    {
      id: 1,
      author: 'Author1 ',
      song: 'Song 1',
      img: 'https://samesound.ru/wp-content/uploads/2019/02/synthwave-album-cover.jpg',
    },
    {
      id: 2,
      author: 'Author 2',
      song: 'Song 2',
      img: 'https://storage.googleapis.com/dream-machines-output/2aa58304-fb3e-4c4a-9d2f-8eec7fba343d/0_0.png',
    },
    {
      id: 3,
      author: 'Author 3',
      song: 'Song 3',
      img: 'https://i.etsystatic.com/41209560/r/il/2c545a/4710334797/il_570xN.4710334797_k7ij.jpg',
    },
    {
      id: 4,
      author: 'Author 4',
      song: 'Song 4',
      img: 'https://cdna.artstation.com/p/assets/images/images/052/333/462/large/luis-mateus-tylerbourbon-dune-gigantic-spaceships-in-the-sky-desert-afte-35e47e1f-c907-48d5-b58e-86b0721c28b0.jpg?1659532195',
    },
    {
      id: 5,
      author: 'Author 5',
      song: 'Song 5',
      img: 'https://i.etsystatic.com/41209560/r/il/213a64/4662160468/il_fullxfull.4662160468_6zx5.jpg',
    },
    {
      id: 6,
      author: 'Author 6',
      song: 'Song 6',
      img: 'https://www.allabtai.com/wp-content/uploads/2023/01/AI.jpg',
    },
    {
      id: 7,
      author: 'Author 7',
      song: 'Song 7',
      img: 'https://opis-cdn.tinkoffjournal.ru/ip/yx68pEgUX1vtvoWCqoAjX9U_SSlcIwzB3aOlAihtnJo/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbi1taWRqb3Vy/bmV5LXRpcHMuanBn',
    },
    {
      id: 8,
      author: 'Author 8',
      song: 'Song 8',
      img: 'https://binaryfork.com/wp-content/uploads/2022/09/midjourney-the-god-of-an-empty-universe.jpg',
    },
    {
      id: 9,
      author: 'Author 9',
      song: 'Song 9',
      img: 'https://binaryfork.com/wp-content/uploads/2022/09/midjourney-the-beginning-of-a-parallel-universe.jpg',
    },
    {
      id: 10,
      author: 'Author 10',
      song: 'Song 10',
      img: 'https://cs14.pikabu.ru/post_img/big/2022/07/31/11/165929224913953672.png',
    },
  ];

  return (
    <div className='container'>
      <div className={styles.mainWrapper_cards}>
        <Cards musicData={musicData} title={'Новинки DLESS'} />
        <Cards musicData={musicData} title={'Новые РЕЛИЗЫ'} />
      </div>
    </div>
  );
}
