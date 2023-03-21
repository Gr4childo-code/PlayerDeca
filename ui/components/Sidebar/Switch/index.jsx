import React from 'react';

import styles from '../Switch/Switch.module.scss';

export default function Switch() {
  return (
    <>
      <div>
        <label class={styles.switch}>
          <input type='checkbox' />
          <span class={styles.slider}></span>
        </label>
        <label class={styles.switch}>
          <input type='checkbox' />
          <span class={styles.slider__round}></span>
        </label>
      </div>
    </>
  );
}
