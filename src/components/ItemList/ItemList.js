import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (
  <ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Важное но не срочное дело'} /></li>
    <li><Item todoItem={'неважное и не срочное дело'} /></li>
  </ul>);

export default ItemList;