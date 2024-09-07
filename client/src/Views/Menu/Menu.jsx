import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from './Menu.module.css';
import NavBar from "../../Components/NavBar/NavBar";
import { getProductsSubCategorias } from "../../redux/actions";

const Menu = () => {
    const dispatch = useDispatch();
    
    // Obtener los productos filtrados desde el estado global
    const currentProducts = useSelector((state) => state.subCategoria);

    // Despachar acción para obtener productos por defecto al cargar
    useEffect(() => {
        dispatch(getProductsSubCategorias('Salon', 'Platos Tipicos', 'Platos Tipicos'));
    }, [dispatch]);

    return (
        <div className={style.container}>
            {/* Pasar valores por defecto */}
            <NavBar defaultSelectedMenu="Platos Tipicos" defaultSelectedOption="Platos Tipicos" />     
            {/* Pasar productos filtrados al CardsContainer */}
            <CardsContainer currentProducts={currentProducts} />
        </div>
    );
};

export default Menu;