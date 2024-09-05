import React from "react";
import { useNavigate } from "react-router-dom";
// import { TbArrowBackUp } from "react-icons/tb";
import style from './Home.module.css';

const Home = () => {

    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/'); // Redirige a la página de inicio o landing page
        console.log("click back", handleMenuClick);
        
    }

    const handleBackClick = () => {
        navigate(-1); //regreso a la pag anterior
        console.log("click back", handleBackClick);
    }
    
    const handleSalonClick = () => {
        navigate('/menu');
    }
    

    return (
        <div className={style.menuContainer}>
          <div className={style.header}>
    <div   onClick={handleMenuClick} className={style.imageContainer}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
    </div>
    <div   onClick={handleBackClick} className={style.buttonBack}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={style.logoBack} />
    </div>
</div>
{/* <button onClick={handleBackClick} className={style.backButton}><TbArrowBackUp /></button> */}
<div className={style.menuOptions}>
        <button onClick={handleSalonClick} className={style.menuButton}> Salon</button>
        <button className={style.menuButton}>Kiosco</button>
            </div>
        </div>
    );
};

export default Home;