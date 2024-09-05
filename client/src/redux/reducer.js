import {GET_PRODUCT_ALL, GET_PRODUCT_DETAIL,GET_PRODUCT_SALESTYPES_ALL ,GET_PRODUCT_SUBCATEGORIAS_ALL } from './actions';


const initialSate = {
    products: [],
    allProducts:[],
    detail:[],
    lugarVenta:[],
    categoria:[],
    subCategoria:[],

};

const rootReducer = (state = initialSate, action) => {
    switch(action.type){

        case GET_PRODUCT_ALL:
            return {...state,
             products: action.payload,
            allProducts: action.payload,
            // lugarVenta: action.payload,
            // categoria: action.payload,
            // subCategoria: action.payload,
            
     };

     case GET_PRODUCT_DETAIL:
        return {
            ...state,
            detail: action.payload
        }

        case "POST_CREATE_PRODUCT":
            return {
                ...state,
            }
        
         case GET_PRODUCT_SALESTYPES_ALL:
        return {
            ...state,
            lugarVenta: action.payload
        }

        case GET_PRODUCT_SALESTYPES_ALL:
            return {
                ...state,
                categoria: action.payload
            }

        case GET_PRODUCT_SUBCATEGORIAS_ALL:
            return {
                ...state,
                subCategoria: action.payload
            }

        


    }
}