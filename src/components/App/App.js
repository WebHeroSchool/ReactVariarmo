import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {value: 'Важное и срочное дело'},
    {value: 'Важное но не срочное дело'},
    {value: 'неважное и не срочное дело'},
  ]

  return (  
    <div className={styles.wrap}>
    <h1 className={styles.title}>Мои важные дела</h1>
    <ItemList items={items}/>
    <Footer count ={3} />
  </div>);
}

export default App;

