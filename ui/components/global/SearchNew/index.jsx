import { useEffect, useState } from 'react';

import { SearchByAuthor } from '@/utils/api/QueryParams';
import { fetchAPI } from '@/utils/api/fetch';
import { debounceFunc } from '@/utils/api/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchNew.module.scss';

const SearchNew = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');

  const handleChangeFilter = (e) => {
    setinputValue(e.target.value);
  };

  const getSearch = () => {
    fetchAPI(`/audios?${SearchByAuthor(inputValue)}`, 'get').then(
      async (response) => {
        const { data } = await response.json();
        console.log(data);
        setserchAudio(data);
      }
    );
  };

  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        debounceFunc(getSearch, 1500);
      } else {
        setserchAudio([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  return (
    <div className={styles.search}>
      <input
        type='text'
        className={styles.search__fields}
        placeholder='Поиск'
        value={inputValue}
        onChange={handleChangeFilter}
        id={'search'}
      />
      <div
        className={
          searchAudio.length == 0
            ? styles.search__overflow
            : styles.search__overflow__active
        }
      >
        {searchAudio?.map(({ id, attributes }) => (
          <div key={id} className={styles.item}>
            <div className={styles.item__cover}>
              {attributes.posterPath ? (
                <img
                  src={process.env.NEXT_PUBLIC_API_URL + attributes.posterPath}
                />
              ) : (
                <FontAwesomeIcon icon={faMusic} />
              )}
            </div>
            <div className={styles.item__info}>
              <strong>{attributes.author}</strong> - {attributes.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchNew;
