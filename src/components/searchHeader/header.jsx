import React, { Component, useRef } from 'react';
import styles from './header.module.css';

const SearchHeader = ({ onSearch }) => {
  // 1. 사용자가 입력한 내용을 받아와야한다.
  // 2. 데이터를 받아온다음에

  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value; // 값을 받아와야한다.
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className={styles.hedaer_nav}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
          <h1>Youtube</h1>
        </div>

        <input
          ref={inputRef}
          type="text"
          className={styles.input_search}
          placeholder="검색어 입력"
          onKeyPress={onKeyPress}
        />
        <button type="submit" className={styles.header_btn} onClick={onClick}>
          <img src="/images/search.png" alt="search" />
        </button>
      </header>
    </>
  );
};

export default SearchHeader;
