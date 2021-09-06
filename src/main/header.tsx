import React from "react";

import styles from "./header.module.css";

interface IHeaderProps {
  title: string;
  filterBar?: React.ReactNode;
}

export function Header({ title, filterBar }: IHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerTitle}>{title}</h2>
      {filterBar}
    </div>
  );
}
