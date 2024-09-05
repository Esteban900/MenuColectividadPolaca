import axios from 'axios';

export const GET_PRODUCT_ALL ="GET_PRODUCT_ALL";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
//export const GET_PRODUCT_SALON_ALL = "GET_PRODUCT_SALON_ALL";
export const GET_PRODUCT_SALESTYPES_ALL = "GET_PRODUCT_SALESTYPES_ALL";
export const GET_PRODUCT_SUBCATEGORIAS_ALL = "GET_PRODUCT_SUBCATEGORIAS_ALL";



//TODOS LOS PRODUCTOS
export const getProductAll = () => {
    return async function (dispatch) {
        try {
            const dataProduct = await axios.get('http://localhost:3001/product');

            const productData = dataProduct.data;
            return dispatch({
                type: GET_PRODUCT_ALL,
                payload:productData
            })
        } catch (error) {
            alert(error.message)
        }
    }
};

//DETAIL (ID)
export const getProductDetail = (id) => {

    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/product/${id}`);

        const productId = apiData.data;
        dispatch({
            type: GET_PRODUCT_DETAIL,
            payload: productId
        });
    };

};


//POST
export const postProduct = (payload) => {
 
    return async function (dispatch) {

        const response = await axios.post("http://localhost:3001/product", payload);
        
        return response;
    }
};

//FILTROS SALON

// PLATOS

//FILTROS SALON - PLATOS TODOS - SALESTYPES + CATEGORIAS
export const getProductSalesTypesAll = (tipo_venta,categoria) => {

    return async function (dispatch) {
        const bdData = await axios.get(`http://localhost:3001/product/${tipo_venta}/${categoria}`);

        const productSaleTypesAll = bdData.data;
        dispatch({
            type: GET_PRODUCT_SALESTYPES_ALL,
            payload: productSaleTypesAll
        });
    };

};


//FILTROS SALON - PLATOS-SUBCATEGORIAS
export const getProductsSubCategorias = (tipo_venta,categoria,subcategoria) => {

    return async function (dispatch) {
        const bdData = await axios.get(`http://localhost:3001/product/${tipo_venta}/${categoria}/${subcategoria}`);

        const productsSubCategorias = bdData.data;
        dispatch({
            type: GET_PRODUCT_SUBCATEGORIAS_ALL,
            payload: productsSubCategorias
        });
    };

};


//FILTROS SALON - PLATOS - POSTRES

// export const getProductSalonPlatosPostres = (tipo_venta,categoria,subcategoria) => {

//     return async function (dispatch) {
//         const bdData = await axios.get(`http://localhost:3001/product/${tipo_venta}/${categoria}/${subcategoria}`);

//         const productSalonPlatosAll = bdData.data;
//         dispatch({
//             type: GET_PRODUCT_SALON_PLATOS_ALL,
//             payload: productSalonPlatosAll
//         });
//     };

// };

//BEBIDAS

//FILTROS SALON - BEBIDAS TODAS



//FILTROS SALON - BEBIDAS - BEBIDAS_SIN_ALCOHOL



//FILTROS SALON - BEBIDAS - BEBIDAS_CON_ALCOHOL



//FILTROS SALON - BEBIDAS - TRAGOS TIPICOS



//FILTROS SALON - BEBIDAS - CAFETERIA


