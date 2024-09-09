import {  POST_CREATE_PRODUCT, GET_PRODUCT_SUBCATEGORIAS_ALL, UPDATE_PRODUCT  } from './actions';

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
        // case GET_PRODUCT_ALL:
        //     return {
        //         ...state,
        //         products: action.payload,
        //         allProducts: action.payload,
        //     };

        // case GET_PRODUCT_DETAIL:
        //     return {
        //         ...state,
        //         detail: action.payload,
        //     };

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
            case UPDATE_PRODUCT:
                return {
                    ...state,
                    products: state.products.map((product) => 
                        product.id === action.payload.id ? action.payload : product
                    ),
                };
        default:
            return state;
    }
};

export default rootReducer;

// import {GET_PRODUCT_ALL, GET_PRODUCT_DETAIL,GET_PRODUCT_SALESTYPES_ALL ,GET_PRODUCT_SUBCATEGORIAS_ALL } from './actions';


// const initialSate = {
//     products: [],
//     allProducts:[],
//     detail:[],
//     lugarVenta:[],
//     categoria:[],
//     subCategoria:[],

// };

// const rootReducer = (state = initialSate, action) => {
//     switch(action.type){

//         case GET_PRODUCT_ALL:
//             return {...state,
//              products: action.payload,
//             allProducts: action.payload,
//             // lugarVenta: action.payload,
//             // categoria: action.payload,
//             // subCategoria: action.payload,
            
//      };

//      case GET_PRODUCT_DETAIL:
//         return {
//             ...state,
//             detail: action.payload
//         }

//         case "POST_CREATE_PRODUCT":
//             return {
//                 ...state,
//             }
        
//          case GET_PRODUCT_SALESTYPES_ALL:
//         return {
//             ...state,
//             lugarVenta: action.payload
//         }

//         case GET_PRODUCT_SALESTYPES_ALL:
//             return {
//                 ...state,
//                 categoria: action.payload
//             }

//         case GET_PRODUCT_SUBCATEGORIAS_ALL:
//             return {
//                 ...state,
//                 subCategoria: action.payload
//             }

        


//     }
// };

// export default rootReducer;