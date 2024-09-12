import React from 'react';
import styles from './AcercaDe.module.css';
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {

  const navigate = useNavigate();

  const handleMenuClick = () => {
      navigate('/'); // Redirige a la página de inicio o landing page
      console.log("click back", handleMenuClick);
      
  }

  const handleBackClick = () => {
      navigate(-1); //regreso a la pag anterior
      console.log("click back", handleBackClick);
  }

  return (
    <div className={styles.casaContainer}>
        <div className={styles.header}>
    <div   onClick={handleMenuClick} className={styles.imageContainer}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={styles.logo} />
    </div>
    <div   onClick={handleBackClick} className={styles.buttonBack}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={styles.logoBack} />
    </div>
</div>
      <h2 className={styles.title}>Colectividad Polaca</h2>
      
      <img src='https://res.cloudinary.com/dmqszpq9k/image/upload/v1725516811/casa_q6blzf.png' alt="Casa" className={styles.casaImage} />
      <div className={styles.description}>

      <p >Esta joya arquitectónica representa el corazón y el alma de la Colectividad Polaca.</p>
      <p>Se inspira en las tradiciones arquitectónicas del sur de Polonia, especialmente en Zakopane, conocida por sus inviernos nevados.</p>
      <p> Tiene cimientos de piedra para aislamiento térmico y una estructura de madera artesanal con materiales locales como incienso, kiri, paraíso y pino.</p>
      <p> Es más que un edificio; es una expresión de identidad y tributo a la resiliencia de nuestros antepasados.</p>
      </div>
    </div>
  );
};

export default AcercaDe;