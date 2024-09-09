import {  POST_CREATE_PRODUCT, GET_PRODUCT_SUBCATEGORIAS_ALL } from './actions';

const initialState = {
    products: [],
    allProducts: [],
    detail: [],
    lugarVenta: [],
    categoria: [],
    subCategoria: [], // Almacena los productos filtrados
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case GET_PRODUCT_SUBCATEGORIAS_ALL:
            return {
                ...state,
                subCategoria: action.payload, // Actualiza el estado con los productos filtrados
            };

            case POST_CREATE_PRODUCT:
            return {
                ...state,
                // Suponiendo que quieres agregar el nuevo producto a la lista de productos
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;