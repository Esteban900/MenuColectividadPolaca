import React from 'react';
import styles from './Details.module.css';

const Detail = () => {
  return (
    <div className={styles.detailContainer}>
      <button className={styles.backButton}>←</button>
      <img 
        src="https://your-image-url.com/pork-bun.jpg" 
        alt="Grilled Pork Buns with Scallion" 
        className={styles.foodImage} 
      />
      <div className={styles.infoContainer}>
        <h2>Grilled Pork Buns with Scallion</h2>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.popular}`}>Popular</span>
          <span className={`${styles.tag} ${styles.nonSpicy}`}>Non-spicy</span>
        </div>
        <button className={styles.addToCartButton}>
          Add to cart <span>$14.50</span>
        </button>
        <p className={styles.description}>
          This is the perfect way to start a meal with. Pork buns are straightforward, yet flavorful and nourishing. If you're in a mood for a cloud soft bite, this is the way to go.
        </p>
      </div>
    </div>
  );
};

export default Detail;