import React from "react";
import Card from "../Cards/Cards";
import style from './CardsContainer.module.css';

const CardsContainer = ({ currentProducts }) => {
    console.log("cardscontainer:", currentProducts);
    
    // if (!Array.isArray(currentProducts) || currentProducts.length === 0) {
    //     return <div className={style.text}>No se eNCONTRO</div>;
    // }

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


// import Card from "../Cards/Cards";
// import style from './CardsContainer.module.css';

// const CardsContainer = ( {currentProducts}) => {

//     if(!Array.isArray()) {
//         return <div className={style.text}>No se encontraron productos!</div>
//     }

//     return(
//         <div className= {style.container}>
//             { currentProducts.map( (product) => {
//                 return(
//                 <div key={product.id} className={style.divCard}>
//                 <Card
//                 id_product = { product.id_product }
//                 name = { product.name }
//                 description = { product.description }
//                 imageUrl = { product.imageUrl }
//                 cost = { product.cost }                 
//                 />
//                 </div>)
//             })}
//         </div>
//     )

// };

// export default CardsContainer;