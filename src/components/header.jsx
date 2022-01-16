import React, { Component } from 'react';
import styles from './header.module.css';

const SerachHeader = (props) => {
  return (
    <>
      <header className={styles.hedaer_nav}>
        <img src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>

        <div className={styles.input_serach}>
          <input type="text" placeholder="검색어 입력" />
          <button
            type="submit"
            className={styles.header_btn}
            img
            src="/images/serach.png"
            alt="serach"
          ></button>
        </div>
      </header>
    </>
  );
};

export default SerachHeader;
