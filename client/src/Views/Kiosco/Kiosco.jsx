import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from './Kiosco.module.css';
import NavBarKiosco from "../../Components/NavBarKiosco/NavBarKiosco";
import { getProductsSubCategorias } from "../../redux/actions";

const Kiosco = () => {
    const dispatch = useDispatch();
    
    // Obtener los productos filtrados desde el estado global
    const currentProducts = useSelector((state) => state.subCategoria);

    // Despachar acción para obtener productos por defecto al cargar
    // useEffect(() => {
    //     dispatch(getProductsSubCategorias('Kiosco', 'Platos Tipicos', 'Platos Tipicos'));
    // }, [dispatch]);

    return (
        <div className={style.container}>
            {/* Pasar valores por defecto */}
            <NavBarKiosco defaultSelectedMenu="Platos Tipicos" defaultSelectedOption="Comida al Paso" />     
            {/* Pasar productos filtrados al CardsContainer */}
            <CardsContainer currentProducts={currentProducts} />
        </div>
    );
};

export default Kiosco;