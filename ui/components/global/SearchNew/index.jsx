import { useEffect, useState, useContext } from 'react';

import { SearchByAuthor } from '@/utils/api/QueryParams';
import { fetchAPI } from '@/utils/api/fetch';
import { debounceFunc } from '@/utils/api/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import AppContext from '@/ui/components/global/AppContext';

import styles from './SearchNew.module.scss';

const SearchNew = () => {
  const { setAudioContext } = useContext(AppContext);

  const [searchAudio, setserchAudio] = useState(null || []);
  const [inputValue, setinputValue] = useState('');

  const handleChangeFilter = (e) => {
    setinputValue(e.target.value);
  };

  const getSearch = async () => {
    const SearchResp = await fetchAPI(
      `/audios?${SearchByAuthor(inputValue)}`,
      'get'
    );
    const response = await SearchResp.json();
    setserchAudio(response);
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
        {searchAudio?.data?.map(({ id, attributes }) => (
          <div
            key={id}
            className={styles.item}
            onClick={() => {
              setAudioContext(searchAudio);
            }}
          >
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
