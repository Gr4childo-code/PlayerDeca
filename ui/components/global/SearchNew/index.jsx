import { useEffect, useState } from 'react';
import { getSearchByAuthor, getSearchDefault } from '@/api';

import styles from './SearchNew.module.scss';
import Track from '@/ui/components/Track';

const SearchNew = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');

  const handleChangeFilter = (e) => {
    setinputValue(e.target.value);
  };

  const getSearch = async () => {
    const SearchResp = await getSearchByAuthor(inputValue);
    setserchAudio(SearchResp);
  };

  const getDefault = async () => {
    const SearchResp = await getSearchDefault();
    setserchAudio(SearchResp);
  };

  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        getSearch();
      } else {
        setserchAudio([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);
  return (
    <div
      className={styles.search}
      onFocus={() => {
        getDefault();
      }}
    >
      <input
        type='text'
        className={styles.search__fields}
        placeholder='Поиск'
        value={inputValue}
        autoComplete='off'
        onChange={handleChangeFilter}
        id={'search'}
      />
      <div
        onMouseLeave={() => {
          setserchAudio([]);
        }}
        className={`${styles.search__overflow}  ${
          !searchAudio?.data?.length == 0 ? styles.search__overflow__active : ''
        }`}
      >
        <div>
          {searchAudio?.data?.map(({ id, attributes }, index) => (
            <Track
              key={id}
              id={id}
              index={index + 1}
              attributes={attributes}
              size={'sm'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchNew;
