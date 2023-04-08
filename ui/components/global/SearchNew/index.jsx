import { useEffect, useState, useContext } from 'react';
import { getSearchByAuthor, getSearchDefault } from '@/api';
import AppContext from '@/ui/components/global/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchNew.module.scss';

const SearchNew = () => {
  const { setAudioContext } = useContext(AppContext);

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
    <div className={styles.search}>
      <input
        type='text'
        className={styles.search__fields}
        placeholder='Поиск'
        value={inputValue}
        autoComplete='off'
        onChange={handleChangeFilter}
        id={'search'}
        onFocus={() => {
          getDefault();
        }}
        onBlur={() => {
          setserchAudio([]);
        }}
      />
      <div
        className={`${styles.search__overflow}  ${
          !searchAudio?.data?.length == 0 ? styles.search__overflow__active : ''
        }`}
      >
        <div>
          {searchAudio?.data?.map(({ id, attributes }) => (
            <div
              key={id}
              className={styles.item}
              onClick={() => {
                setAudioContext(searchAudio);
              }}
            >
              <div className={styles.item__cover}>
                {attributes.poster?.data?.attributes ? (
                  <img
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      attributes.poster.data?.attributes.url
                    }
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
    </div>
  );
};

export default SearchNew;
