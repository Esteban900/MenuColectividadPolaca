import React from "react";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from './Menu.module.css';
import NavBar from "../../Components/NavBar/NavBar";
// import { TbArrowBackUp } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

const Menu = () => {

    // const navigate = useNavigate();
   
   
    return(
        <div className={style.container}>
            <NavBar/>     
            <CardsContainer/>
    </div>
    )
};

export default Menu;