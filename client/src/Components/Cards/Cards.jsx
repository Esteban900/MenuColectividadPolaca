import React from "react";
import style from './Cards.module.css';
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

  const handleDetailClick = () => {
      navigate('/detail'); // Redirige a la página de inicio o landing page
      
      
  }
    return (
        <div className={style.Card}>
            {/* <div onClick={handleDetailClick} className={style.detail}> */}
                {/* <Link to={`/detail/${props.id_product}`}> */}
            <img src={props.imageUrl} alt="Imagen no encontrada" className={style.image}   />
                {/* </Link> */}
            
            {/* </div> */}
            <div className={style.content}>
                <h2 className={style.title}>{props.name}</h2>
                <span className={style.price}>$ {props.cost}</span>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;

// import style from './Cards.module.css';

// const Card = (props) => {
//     return(
//         <div className={style.Card}>
//             <img src={props.imageUrl} alt='img not found' className={style.image}/>
//             <div className={style.content}>
//         <h2 className={style.title}>{props.name}</h2>
//         <span className={style.price}>$ {props.cost}</span>
//         <p className={style.description}>{props.description}</p>
//       </div>
//       </div>
      
//     )
// };

// export default Card;