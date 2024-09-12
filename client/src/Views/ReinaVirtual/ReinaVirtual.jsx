import React, { useState, useEffect } from 'react';
import styles from './ReinaVirtual.module.css';
import { useNavigate } from "react-router-dom";

const Reina = () => {
  const images = [
    'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725513906/reina4_jc93bz.png',
    'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725514074/reina2_xluoyl.png',
    'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725514983/reina5_tajusg.png' 
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const handleMenuClick = () => {
      navigate('/'); // Redirige a la página de inicio o landing page
      console.log("click back", handleMenuClick);
      
  }

  const handleBackClick = () => {
      navigate(-1); //regreso a la pag anterior
      console.log("click back", handleBackClick);
  }
  
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Cambiar imagen cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className={styles.reinaContainer}>
        <div className={styles.header}>
    <div   onClick={handleMenuClick} className={styles.imageContainer}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={styles.logo} />
    </div>
    <div   onClick={handleBackClick} className={styles.buttonBack}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={styles.logoBack} />
    </div>
</div>
      <h2 className={styles.title}>Polska Krolowa</h2>
      <h3 className={styles.reinaName}>Paula Florencia Solis Cukla</h3>
      {/* <button className={styles.voteButton} onClick={() => window.open('https://reina.elterritorio.ar/2024/colectividad/11-polaca/56-paula-florencia-solis/', '_blank')} >Votar a nuestra Reina virtual</button> */}
      <img src={images[currentImageIndex]} alt="Reina" className={styles.reinaImage} />
      <div className={styles.description}>

      <p >Paula tiene 25 años de edad. </p>
      <p>Es Técnica en Estética y Cosmetología, se especializo en áreas complementarias como spa, masoterapia, maquillaje social.</p>
      <p> En la actualidad lidera su propio centro de belleza abocado al servicio de uñas (manicura y pedicura) aquí en nuestra ciudad de Obera. Es oriunda de la localidad de Campo Viera aunque en la actualidad reside en Obera.</p>
      <p>   Su ascendencia proviene por parte de su abuela materna y abuela paterna.</p>
      </div>
    </div>
  );
};

export default Reina;