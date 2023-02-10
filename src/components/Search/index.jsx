import React from "react";

import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input onChange={(event) => setSearchValue(event.target.value)} placeholder="Поиск пиццы..." value={searchValue}/>
    </div>
  );
};

export default Search;
