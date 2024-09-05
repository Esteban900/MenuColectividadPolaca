import React from 'react';
import styles from './AcercaDe.module.css';
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {
//   const images = [
//     'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725513906/reina4_jc93bz.png',
//     // 'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725501438/reina1_zp58ws.png', // URL de la imagen 1
//     'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725514074/reina2_xluoyl.png', // URL de la imagen 2
//     'https://res.cloudinary.com/dmqszpq9k/image/upload/v1725514983/reina5_tajusg.png'  // URL de la imagen 3
//   ];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const handleMenuClick = () => {
      navigate('/'); // Redirige a la página de inicio o landing page
      console.log("click back", handleMenuClick);
      
  }

  const handleBackClick = () => {
      navigate(-1); //regreso a la pag anterior
      console.log("click back", handleBackClick);
  }
  
 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Cambiar imagen cada 3 segundos

//     return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
//   }, [images.length]);

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
      {/* <h3 className={styles.reinaName}>Paula Florencia Solis Cukla</h3> */}
      
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