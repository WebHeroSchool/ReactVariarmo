import React from 'react';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Items';
import Footer from './components/Footer/Footer';

const todoItem = 'Важное и срочное дело.'
const App = () => (
  <div>
    <h1>Мои важные дела</h1>
    <Item />
    <ItemList />
    <Footer count ={3} />
  </div>);

export default App;

