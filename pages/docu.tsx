import React from 'react';
import styles from '../styles/Home.module.css';

type Props = {};

function docu({}: Props) {
  return (
    <div className={styles.container}>
      <main>
        <h1>Simple API Documentation here</h1>
      </main>
    </div>
  );
}

export default docu;
