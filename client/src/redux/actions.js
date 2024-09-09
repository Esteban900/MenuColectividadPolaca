import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const GET_PRODUCT_SUBCATEGORIAS_ALL = "GET_PRODUCT_SUBCATEGORIAS_ALL";
export const POST_CREATE_PRODUCT = 'POST_CREATE_PRODUCT';
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

// Obtener productos filtrados por tipo de venta, categoría y subcategoría
export const getProductsSubCategorias = (tipo_venta, categoria, subcategoria) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${apiUrl}menu/${tipo_venta}/${categoria}/${subcategoria}`);
            const productsSubCategorias = response.data;

            dispatch({
                type: GET_PRODUCT_SUBCATEGORIAS_ALL,
                payload: productsSubCategorias,
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};

//POST
export const postProduct = (formData) => {
      
    return async function (dispatch) {
        try {
            
            // No es necesario crear un nuevo FormData aquí
            // ya que `formData` ya está creado y recibido

            for (let pair of formData.entries()) {
                // console.log(pair[0] + ', ' + pair[1]);
            }

            const response = await axios.post(`${apiUrl}product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch({
                type: POST_CREATE_PRODUCT,
                payload: response.data // Asumiendo que el backend devuelve el producto creado
            });
            return response.data; // Aquí devolvemos la respuesta
            // return response;
        } catch (error) {
            // console.error('Error posting product:', error);
            dispatch({ type: 'POST_PRODUCT_ERROR', error: error.message });
            throw error; // Aquí lanzamos el error para que el componente pueda capturarlo
        }
    }
};


//modificar un producto


// Acción para actualizar un producto
export const updateProduct = (id, formData) => {
    return async function (dispatch) {
        try {
            const response = await axios.put(`${apiUrl}product/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch({
                type: UPDATE_PRODUCT,
                payload: response.data, // Suponiendo que el backend devuelve el producto actualizado
            });
            return response.data;
        } catch (error) {
            console.error("Error updating product:", error);
            dispatch({ type: 'UPDATE_PRODUCT_ERROR', error: error.message });
            throw error;
        }
    }
};

// Acción para obtener todos los productos
export const getAllProducts = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${apiUrl}product`); // Ajusta la URL según tu configuración del backend
            const products = response.data;

            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products,
            });
        } catch (error) {
            console.error("Error fetching all products:", error);
            dispatch({ type: 'GET_PRODUCTS_ERROR', error: error.message });
        }
    };
};

// export const postProduct = (payload) => {
 
//     return async function (dispatch) {

//         const response = await axios.post("http://localhost:3001/product", payload);
        
//         return response;
//     }
// };

// import axios from 'axios';

// export const GET_PRODUCT_ALL ="GET_PRODUCT_ALL";
// export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
// //export const GET_PRODUCT_SALON_ALL = "GET_PRODUCT_SALON_ALL";
// export const GET_PRODUCT_SALESTYPES_ALL = "GET_PRODUCT_SALESTYPES_ALL";
// export const GET_PRODUCT_SUBCATEGORIAS_ALL = "GET_PRODUCT_SUBCATEGORIAS_ALL";



// //TODOS LOS PRODUCTOS
// export const getProductAll = () => {
//     return async function (dispatch) {
//         try {
//             const dataProduct = await axios.get('http://localhost:3001/product');

//             const productData = dataProduct.data;
//             return dispatch({
//                 type: GET_PRODUCT_ALL,
//                 payload:productData
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }
// };

// //DETAIL (ID)
// export const getProductDetail = (id) => {

//     return async function (dispatch) {
//         const apiData = await axios.get(`http://localhost:3001/product/${id}`);

//         const productId = apiData.data;
//         dispatch({
//             type: GET_PRODUCT_DETAIL,
//             payload: productId
//         });
//     };

// };


// //POST
// export const postProduct = (payload) => {
 
//     return async function (dispatch) {

//         const response = await axios.post("http://localhost:3001/product", payload);
        
//         return response;
//     }
// };

// //FILTROS SALON

// // PLATOS

// //FILTROS SALON - PLATOS TODOS - SALESTYPES + CATEGORIAS
// export const getProductSalesTypesAll = (tipo_venta,categoria) => {

//     return async function (dispatch) {
//         const bdData = await axios.get(`http://localhost:3001/product/${tipo_venta}/${categoria}`);

//         const productSaleTypesAll = bdData.data;
//         dispatch({
//             type: GET_PRODUCT_SALESTYPES_ALL,
//             payload: productSaleTypesAll
//         });
//     };

// };


// //FILTROS SALON - PLATOS-SUBCATEGORIAS
// export const getProductsSubCategorias = (tipo_venta,categoria,subcategoria) => {

//     return async function (dispatch) {
//         const bdData = await axios.get(`http://localhost:3001/product/${tipo_venta}/${categoria}/${subcategoria}`);

//         const productsSubCategorias = bdData.data;
//         dispatch({
//             type: GET_PRODUCT_SUBCATEGORIAS_ALL,
//             payload: productsSubCategorias
//         });
//     };

// };


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


