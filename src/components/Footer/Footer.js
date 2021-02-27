import React from 'react';
import styles from './footer.module.css';

const Footer = ({ count }) => (<div className={styles.footer}>Осталось дел: { count } </div>);

export default Footer;