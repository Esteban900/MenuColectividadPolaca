import Card from "../Cards/Cards";
import style from './CardsContainer.module.css';

const CardsContainer = ( {product}) => {

    // if(!Array.isArray()) {
    //     return <div className={style.text}>No se encontraron productos!</div>
    // }

    return(
        <div  className={style.divCard}>
            <Card
            // id={product.id}
            // name={product.name}          
            />

        </div>
    )
};

export default CardsContainer;