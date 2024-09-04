import style from './Cards.module.css';

const Card = () => {
    return(
        <div>

        <div className={style.Card}>
            <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
      </div>
      </div>
      <div className={style.Card}>

      <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
        </div>
      </div>
      <div className={style.Card}>

      <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
        </div>
      </div>
      <div className={style.Card}>

      <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
        </div>
      </div>
      <div className={style.Card}>

      <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
        </div>
      </div>
      <div className={style.Card}>

      <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725336986/tipicorectangulo_hgbpvx.png" alt='props.id' className={style.image}/>
            <div className={style.content}>
        <h2 className={style.title}>Margherita</h2>
        {/* <span className={style.price}>8.00 €</span> */}
        <p className={style.description}>
          pomodoro San Marzano D.O.P., mozzarella fiordilatte, basilico, olio extravergine di oliva
        </p>
        </div>
      </div>
        </div>
       
    )
};

export default Card;