import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


export const GET_PRODUCT_SUBCATEGORIAS_ALL = "GET_PRODUCT_SUBCATEGORIAS_ALL";
export const POST_CREATE_PRODUCT = 'POST_CREATE_PRODUCT';

// Obtener productos filtrados por tipo de venta, categoría y subcategoría
export const getProductsSubCategorias = (tipo_venta, categoria, subcategoria) => {
    return async function (dispatch) {
        try {
             const response = await axios.get(`${apiUrl}menu/${tipo_venta}/${categoria}/${subcategoria}`);
            // const response = await axios.get(`http://localhost:3001/menu/${tipo_venta}/${categoria}/${subcategoria}`);
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
