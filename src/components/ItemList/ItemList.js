import React from 'react';
import Item from '../Item/Item';
import styles from './itemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul className={styles.list} >
      {items.map(item => <li key={item.value}>
      <Item 
        value={item.value} 
        isDone={item.isDone} 
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    </li>)}
  </ul>);

export default ItemList;