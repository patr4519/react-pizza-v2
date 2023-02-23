import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>лалала</span>
        <br />
        Ничего не найдено
      </h1>
    </div>
  );
};

export default NotFoundBlock;
