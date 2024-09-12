import React from "react";
import Card from "../Cards/Cards";
import style from './CardsContainer.module.css';

const CardsContainer = ({ currentProducts, loading  }) => {
    console.log("cardscontainer:", currentProducts);
    
     if (loading) {
        return <div className={style.loading}>Cargando...</div>; // Mostrar mensaje o spinner de carga
    }
    
    return (
        <div className={style.container}>
            {currentProducts.map((product) => (
                <div key={product.id_product} className={style.divCard}>
                    <Card
                        id_product={product.id_product}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        cost={product.cost}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardsContainer;