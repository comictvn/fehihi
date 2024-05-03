import React from 'react';
import Input, { InputProps } from '../Input';
import styles from './index.module.css';

const SearchBox: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.searchBox}>
      <Input {...props} />
    </div>
  );
};

export default SearchBox;
