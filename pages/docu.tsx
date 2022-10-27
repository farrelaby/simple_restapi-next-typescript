import React from 'react';
import styles from '../styles/Home.module.css';

type Props = {};

function docu({}: Props) {
  return (
    <div className={styles.container}>
      <main>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <h1 className='text-4xl font-bold mt-16 mb-8 text-center'>
            Simple API Documentation here
          </h1>

          <div className='container mx-8 flex flex-col gap-8 items-center border-solid border-1 border-sky-500'>
            <h3>TES</h3>
            <h3>ANJAS</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default docu;
