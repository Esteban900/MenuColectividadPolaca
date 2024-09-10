import React from "react";
import styles from "./ModalImage.module.css";

const ModalImage = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        {/* Botón de cerrar con "X" en la esquina superior derecha */}
        <button onClick={onClose} className={styles.closeButton}>
          &#10005;
        </button>
        
        <img
          src={imageUrl}
          alt="Expanded"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ModalImage;