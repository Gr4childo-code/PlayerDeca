import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Options from '@/ui/components/Options';
import styles from '@/ui/components/Track/Track.module.scss';

const Track = ({ id, index, attributes, size = 'sm' }, ...props) => {
  return (
    <div className={styles.track} key={id}>
      <div className={styles.track__number}>{index}</div>

      <div className={styles.track__cover}>
        {attributes?.poster.data?.attributes ? (
          <img
            src={
              process.env.NEXT_PUBLIC_API_URL +
              attributes?.poster.data?.attributes.url
            }
          />
        ) : (
          <div className={styles.track__cover__font}>
            <FontAwesomeIcon icon={faMusic} size={'xl'} />
          </div>
        )}

        <div className={styles.track__hoverState}>
          <Options play={true} size={size} dataMusic={[{ id, attributes }]} />
        </div>
      </div>

      <div className={styles.track__music}>
        <p className={styles.track__music__name}>{attributes?.name}</p>

        <p className={styles.track__music__author}>{attributes?.author}</p>
      </div>
      <div className={styles.track__options}>
        <Options
          like={true}
          queue={true}
          size={size}
          dataMusic={[{ id, attributes }]}
        />
      </div>
    </div>
  );
};

export default Track;
