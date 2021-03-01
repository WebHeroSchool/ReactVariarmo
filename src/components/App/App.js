import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';

class App extends React.Component {
   state = {
      items: [
      {
        value: 'Важное и срочное дело',
        isDone: true
      },
      {
        value: 'Важное но не срочное дело',
        isDone: false
      
      },
      {
        value: 'неважное и не срочное дело',
        isDone: false
      },
   ] 
  };
  
  onClickDone = (isDone) => console.log(isDone);
  
  render() {
      return (  
      <div className={styles.wrap}>
      <h1 className={styles.title}>Мои важные дела</h1>
      <InputItem/>
      <ItemList items={this.state.items}/>
      <Footer count ={3} />
    </div>);
  }
};


export default App;