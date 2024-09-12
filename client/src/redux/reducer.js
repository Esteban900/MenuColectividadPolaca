import {  POST_CREATE_PRODUCT, GET_PRODUCT_SUBCATEGORIAS_ALL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './actions';

const initialState = {
    products: [],
    allProducts: [],
    lugarVenta: [],
    categoria: [],
    subCategoria: [], // Almacena los productos filtrados
     loading: false, // Indicador de carga
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
            case GET_PRODUCTS_REQUEST:
                return {
                    ...state,
                    loading: true,
                };
            case GET_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                };
                    default:
                        return state;
                }
};

export default rootReducer;