import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Важное и срочное дело.'
const App = () => (
  <div>
    <h1>Мои важные дела</h1>
    <ItemList todoItem={todoItem}/>
    <Footer count ={3} />
  </div>);

export default App;

