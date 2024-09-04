import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {

const [selectedMenu, setSelectedMenu] = useState();

const navigate = useNavigate();

const handleBackClick = () => {
  navigate(-1); //regreso a la pag anterior
}
const handleMenuClick = () => {
    navigate('/'); // Redirige a la página de inicio o landing page
}
    
const platosOptions = ['Todos','Platos Tipicos','Postres Tradicionales' ];
  const bebidasOptions = [ 'Bebidas sin alcohol', 'Bebidas con alcohol', 'Tragos tipicos', 'Cafeteria'];

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className={style.navBarContainer}>
      <div className={style.navBar}>
     
        <div   onClick={handleMenuClick} className={style.imageContainer}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
    </div>
        <div   onClick={handleBackClick} className={style.buttonBack}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={style.logoBack} />
    </div>
        <button
          className={`${style.navButton} ${selectedMenu === 'Platos Tipicos' ? style.active : ''}`}
          onClick={() => handleMenuChange('Platos Tipicos')}
        >
          Platos Típicos
        </button>
        <button
          className={`${style.navButton} ${selectedMenu === 'Bebidas' ? style.active : ''}`}
          onClick={() => handleMenuChange('Bebidas')}
        >
          Bebidas
        </button>
      </div>
      
      <div className={style.menuOptions}>
        {selectedMenu === 'Platos Tipicos' && platosOptions.map((option, index) => (
          <button key={index} className={style.optionButton}>
            {option}
          </button>
        ))}

        {selectedMenu === 'Bebidas' && bebidasOptions.map((option, index) => (
          <button key={index} className={style.optionButton}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;