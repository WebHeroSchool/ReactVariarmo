import React from 'react';
import classnames from 'classnames';
import styles from './item.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
  
   <label className={styles.check} >
    <input 
      type="checkbox" 
      className={styles.check__input} 
      checked={isDone}
      onClick={() => onClickDone(id)}
    />
    <span className={styles.check__box}></span> 
    <span className={
    classnames({
        [styles.Item]: true,
        [styles.done]: isDone,
    }) 
   }>{ value }</span>
    <IconButton 
      aria-label="delete"
      className={styles.delBTN}
      onClick={() => onClickDelete(id)}
    ><DeleteIcon /> </IconButton>
   </label> );

export default Item;