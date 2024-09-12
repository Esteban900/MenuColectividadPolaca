import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './landingPage.module.css';

const LandingPage = () => {

 const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/home');
  };

  const handleReinaClick = () => {
    navigate('/reina');
  }

  const handleAcercaDeClick = () => {
    navigate('/acercade');
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h2>Colectividad Polaca</h2>
          <p>Witamy w Naszym Domu Polski</p>
          <p>¡Bienvenido a nuestra casa polaca!</p>
      </div>
        </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMenu} onClick={handleMenuClick} >Menu</button>
        <button className={styles.buttonQueen} onClick={handleReinaClick}>Nuestra Reina</button>
        <button className={styles.buttonAbout} onClick={handleAcercaDeClick}>Sobre Nosotros</button>
      </div>
    </div>
  );
};

export default LandingPage;