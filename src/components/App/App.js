import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {value: 'Важное и срочное дело'},
    {value: 'Важное но не срочное дело'},
    {value: 'неважное и не срочное дело'},
  ]

  return (  
    <div>
    <h1>Мои важные дела</h1>
    <ItemList items={items}/>
    <Footer count ={3} />
  </div>);
}

export default App;

