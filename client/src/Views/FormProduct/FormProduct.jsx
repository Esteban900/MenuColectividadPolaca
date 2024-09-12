import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/actions";
import style from './FormProduct.module.css';
import { useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/menu'); // Redirige a la página de inicio o landing page
        console.log("click back", handleMenuClick);
        
    }

    const [product, setProduct] = useState({
        name: '',
        description: '',
        cost: '',
        availability: true,
        category: '',
        subCategory: '',
        salesTypes: []
    });

    const [files, setFiles] = useState(null);
 
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    
    const handleSaleTypeChange = (event) => {
        const { value, checked } = event.target;  // Captura el valor y si está marcado o no
    
        // Si el checkbox está marcado, añadimos el valor al array; si no, lo eliminamos
        if (checked) {
            setProduct({
                ...product,
                salesTypes: [...product.salesTypes, value], // Añade el valor si está marcado
            });
        } else {
            setProduct({
                ...product,
                salesTypes: product.salesTypes.filter((type) => type !== value), // Elimina el valor si está desmarcado
            });
        }
    };

    const handleFileChange = (e) => {
      setFiles(e.target.files[0]);  // Asegúrate de que esto está configurando un archivo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Agregar los datos del producto al FormData
    for (const key in product) {
        if (Array.isArray(product[key])) {
            product[key].forEach(item => formData.append(key, item));
        } else {
            formData.append(key, product[key]);
        }
    }

    // Agregar el archivo al FormData, si existe
    if (files) {
        formData.append('files', files);
    
    }

    // Imprimir el contenido del FormData para verificar que el archivo está incluido
    for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    // Despachar la acción para enviar el producto
    dispatch(postProduct(formData));
    alert("Producto creado con exito!!")
    setProduct( {
        name: '',
        description: '',
        cost: '',
        availability: true,
        category: '',
        subCategory: '',
        salesTypes: []
    });
};


    return (
        <div>
       <div className={style.header}>
    <div   onClick={handleMenuClick} className={style.imageContainer}>
        <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
    </div>
</div>
        <form className={style.form} onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </label>
            <label>
                Descripción:
                <textarea name="description" value={product.description} onChange={handleChange} required />
            </label>
            <label>
                Cargar imagen:
                <input type="file" name="files" accept="image/*" onChange={handleFileChange} />
            </label>
            <label>
                Precio:
                <input type="number" step="0.01" name="cost" value={product.cost} onChange={handleChange} required />
            </label>
            <label>
                Disponible:
                <select name="availability" value={product.availability} onChange={handleChange}>
                    <option value={true}>Disponible</option>
                    <option value={false}>No disponible</option>
                </select>
            </label>
            <label>
                Categoría:
                <select name="category" value={product.category} onChange={handleChange}>
                    <option value="">Seleccionar una categoría</option>
                    <option value="Platos_Tipicos">Platos Tipicos</option>
                    <option value="Bebidas">Bebidas</option>
                </select>
            </label>
            <label>
                Subcategoría:
                <select name="subCategory" value={product.subCategory} onChange={handleChange}>
                    <option value="">Seleccionar una subcategoría</option>
                    <option value="Platos_Tipicos">Platos Típicos</option>
                    <option value="Bebidas_sin_alcohol">Bebidas sin Alcohol</option>
                    <option value="Bebidas_con_alcohol">Bebidas con Alcohol</option>
                    <option value="Tragos_Tipicos">Tragos Tipicos</option>
                    <option value="Postres_Tradicionales">Postres Tradicionales</option>
                    <option value="Comida_al_Paso">Comida al Paso</option>
                </select>
            </label>
                                     <label>
                                    Lugar de venta:
                                    <div>
                                        <label>
                                        <input
                                            type="checkbox"
                                            name="salesTypes"
                                            value="Salon"
                                            checked={product.salesTypes.includes("Salon")}
                                            onChange={handleSaleTypeChange}
                                        />
                                        Salon
                                        </label>
                                        <label>
                                        <input
                                    type="checkbox"
                                    name="salesTypes"
                                    value="Kiosco"
                                     checked={product.salesTypes.includes("Kiosco")}
                                     onChange={handleSaleTypeChange}
                                     />
                                   Kiosco
                           </label>
                      </div>
            </label>
            <button type="submit">Cargar Producto</button>
        </form>
              </div>
    );
};

export default Form;