import styles from './SearchNew.module.scss'

const SearchNew = () => {
  return <div className={styles.search}>
    <input type="text" className={styles.search__fields} placeholder="Поиск" />
  </div>
}

export default SearchNew