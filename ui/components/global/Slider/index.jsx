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
  ];
  const playList = [
    [
      {
        id: 1,
        image: 'https://via.placeholder.com/150x150',
        nameplaylist: '1',
        author: 'Danill',
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150x150',
        nameplaylist: '2',
        author: 'Danill',
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150x150',
        nameplaylist: '3',
        author: 'Danill',
      },
    ],

    [
      {
        id: 4,
        image: 'https://via.placeholder.com/150x150',
        nameplaylist: 'Phonk',
        author: 'Aleksey',
      },
      {
        id: 5,
        image: 'https://via.placeholder.com/150x150',
        nameplaylist: 'Phonk',
        author: 'Aleksey',
      },
    ],
  ];
  return (
    <div className={styles.mainWrapper_cards}>
      <Cards musicData={musicData} title={'Новинки DLESS'} type={'news'} />
      <Cards musicData={playList} title={'Playlist'} type={'playlist'} />
    </div>
  );
}
