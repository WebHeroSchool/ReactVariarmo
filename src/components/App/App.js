import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';

class App extends React.Component {
   state = {
      items: [
      {
        value: 'Купить сыр',
        isDone: true,
        id: 1
      },
      {
        value: 'Порезать сыр',
        isDone: false,
        id: 2
      },
      {
        value: 'Сделать бутерброд',
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
                      
    onClickDelete = (id) => this.setState(state => ({ items: state.items.filter(item => item.id !== id),
    count: state.count - 1 })); 
  
    onClickAdd = value => this.setState(state => ({
      items: [
        ...state.items, 
        {
          value,
          isDone: false,
          id: state.count + 1
        }
      ],
      count: state.count + 1
    }));
  
  render() {
      return (  
      <div className={styles.wrap}>
      <h1 className={styles.title}>Мои важные дела</h1>
      <InputItem onClickAdd={this.onClickAdd} />
      <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
      <Footer count ={this.state.count} />
    </div>);
  }
};


export default App;