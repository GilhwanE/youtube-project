import React, { Component } from 'react';
import styles from './header.module.css';

const SerachHeader = (props) => {
  return (
    <>
      <header className={styles.hedaer_nav}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
          <h1>Youtube</h1>
        </div>

        <input
          type="text"
          className={styles.input_serach}
          placeholder="검색어 입력"
        />
        <button type="submit" className={styles.header_btn}>
          <img src="/images/search.png" alt="search" />
        </button>
      </header>
    </>
  );
};

export default SerachHeader;
