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
        isDone: true,
        id: 1
      },
      {
        value: 'Важное но не срочное дело',
        isDone: false,
        id: 2
      },
      {
        value: 'неважное и не срочное дело',
        isDone: false,
        id: 3
      }
   ],
   count: 3
  };
  
  onClickDone = id => {
    const newItemList = this.state.items.map(item => { 
       const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }
        return newItem;
       });     
      this.setState({ items: newItemList});
    };
                      
    onClickDelete = (id) => this.setState(state => ({ items: state.items.filter(item => item.id !== id)})); 
  
  
  render() {
      return (  
      <div className={styles.wrap}>
      <h1 className={styles.title}>Мои важные дела</h1>
      <InputItem/>
      <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
      <Footer count ={3} />
    </div>);
  }
};


export default App;