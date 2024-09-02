import React from 'react';
import styles from './homeMenu.module.css';

const HomeMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <button className={styles.backButton}>Menu</button>
        {/* <img src={require('../../assets/menu.png')} alt="Menu Background" className={styles.backgroundImage} /> */}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.menuButton}>SALON</button>
        <button className={styles.menuButton}>KIOSCO</button>
      </div>
    </div>
  );
}

export default HomeMenu;