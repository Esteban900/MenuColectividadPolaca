import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsSubCategorias, updateProduct } from '../redux/actions';
import styles from './UpdateProduct.module.css';

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products); // Obtiene los productos del estado
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        cost: '',
        availability: '',
        category: '',
        subCategory: '',
        salesTypes: '',
    });

    useEffect(() => {
        // Obtenemos los productos al montar el componente
        dispatch(getProductsSubCategorias('all', 'all', 'all')); 
    }, [dispatch]);

    // Manejar cambio en el formulario
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Seleccionar un producto
    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        setFormData({
            name: product.name,
            description: product.description,
            cost: product.cost,
            availability: product.availability,
            category: product.category,
            subCategory: product.subCategory,
            salesTypes: product.salesTypes,
        });
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedProduct) {
            dispatch(updateProduct(selectedProduct.id_product, formData));
        }
    };

    return (
        <div className={styles.updateProductContainer}>
            <h1>Actualizar Producto</h1>
            <div className={styles.productsList}>
                <h2>Selecciona un producto para actualizar</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id_product} onClick={() => handleSelectProduct(product)}>
                            {product.name} - ${product.cost}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedProduct && (
                <div className={styles.formContainer}>
                    <h2>Actualizar {selectedProduct.name}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nombre del producto"
                        />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Descripción"
                        />
                        <input
                            type="number"
                            name="cost"
                            value={formData.cost}
                            onChange={handleInputChange}
                            placeholder="Precio"
                        />
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            placeholder="Categoría"
                        />
                        <input
                            type="text"
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleInputChange}
                            placeholder="SubCategoría"
                        />
                        <input
                            type="text"
                            name="salesTypes"
                            value={formData.salesTypes}
                            onChange={handleInputChange}
                            placeholder="Tipos de Venta"
                        />
                        <button type="submit">Actualizar!</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UpdateProduct;