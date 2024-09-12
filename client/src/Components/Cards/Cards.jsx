import React, { useState } from "react";
import style from './Cards.module.css';
import ModalImage from "../Modal/ModalImage";

const Card = (props) => {
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(null); // Para la imagen seleccionada

    // Función para abrir el modal y establecer la imagen seleccionada
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <div className={style.Card}>
            {/* Imagen que abre el modal al hacer clic */}
            <img 
                src={props.imageUrl} 
                alt="Imagen no encontrada" 
                className={style.image} 
                onClick={() => openModal(props.imageUrl)} // Al hacer clic, abre el modal con la imagen seleccionada
            />

            <span className={style.price}>$ {props.cost}</span>
            
            <div className={style.content}>
                <h2 className={style.title}>{props.name}</h2>
                <p className={style.description}>{props.description}</p>
            </div>

            {/* Modal para mostrar la imagen más grande */}
            {modalOpen && (
                <ModalImage 
                    imageUrl={selectedImage} 
                    onClose={closeModal} 
                />
            )}
        </div>
    );
};

export default Card;