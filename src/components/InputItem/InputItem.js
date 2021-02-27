import React from 'react';
import styles from './inputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div >
    <TextField
        className={styles.addcase}
        id="standard-dense"
        label="Новое дело"
        margin="dense"
    />
</div>);

export default InputItem;