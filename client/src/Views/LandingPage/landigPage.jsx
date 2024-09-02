import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './landingPage.module.css';

const LandingPage = () => {

 const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/home-menu');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <img src="/path/to/logo.png" alt="Logo de Polonia" className={styles.logo} /> */}
        <div className={styles.text}>
          <h2>Colectividad Polaca</h2>
          <p>Witamy w Naszym Domu Polski</p>
          <p>Bienvenidos a la Casa Polaca</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleMenuClick} >Menu</button>
        <button className={styles.button}>Votar reina</button>
        <button className={styles.button}>Acerca de</button>
      </div>
    </div>
  );
};

export default LandingPage;