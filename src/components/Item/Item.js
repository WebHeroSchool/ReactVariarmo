import React from 'react';
import classnames from 'classnames';
import styles from './item.module.css';

const Item = ({ value, isDone, onClickDone}) => (
  <span className={
    classnames({
        [styles.Item]: true,
        [styles.done]: isDone,
    })
   } >
   <label className={styles.check} >
    <input 
      type="checkbox" 
      className={styles.check__input} 
      checked={isDone}
      onClick={() => onClickDone(isDone)}/>
     <span className={styles.check__box}></span> 
  { value }
    </label>
  </span>);

export default Item;