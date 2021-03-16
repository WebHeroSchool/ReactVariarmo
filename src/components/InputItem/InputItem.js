import React from 'react';
import styles from './inputItem.module.css';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.setState = {
            touched: false, error: '',
            inputValue: ''  
        }
        this.props.onClickAdd(this.state.inputValue);       
    }


    render () {
        const { onClickAdd } = this.props;

        return (<div className={styles.add} >
            <input
                type="text"
                className={styles.add__case}
                placeholder="Новое дело"
                autocomplete="off"
                required
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
            <input
                disabled={!this.state.inputValue}
                type="submit"
                value="Добавить"
                className={styles.add__btn} 
                onClick={this.onButtonClick}   
             />
        </div>)
    }
}

export default InputItem;