import React, {useState, useEffect} from "react";
import style from './FormProduct.module.css';

const Form = () => {

    const [product, setProduct] = useState({
        name: '',
    description: '',
    imageUrl: '',
    cost: '',
    availability: true,
    category: '',
    subCategory: '',
    saleTypes: []
    });

    const [saleTypes, setSaleTypes] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los SaleTypes desde el backend.
    const fetchedSaleTypes = [
      { id: 1, name: 'Online' },
      { id: 2, name: 'In-store' },
      { id: 3, name: 'Pickup' }
    ];
    setSaleTypes(fetchedSaleTypes);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSaleTypeChange = (event) => {
    const { options } = event.target;
    const selectedSaleTypes = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSaleTypes.push(options[i].value);
      }
    }
    setProduct({
      ...product,
      saleTypes: selectedSaleTypes,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Si se seleccionó un archivo, puedes manejar la subida aquí
    if (imageFile) {
      console.log('File selected:', imageFile);
      // Aquí podrías agregar la lógica para subir el archivo al servidor
    } else {
      console.log('No file selected');
    }

    console.log(product);
    // Aquí podrías agregar la lógica para enviar el formulario a tu backend
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </label>
      <label>
        Descripcion:
        <textarea name="description" value={product.description} onChange={handleChange} required />
      </label>
      {/* <label>
        Image URL:
        <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Or enter image URL" />
      </label> */}
      <label>
        Cargar imagen:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <label>
        Precio:
        <input type="number" step="0.01" name="cost" value={product.cost} onChange={handleChange} required />
      </label>
      <label>
        Disponible:
        <select name="availability" value={product.availability} onChange={handleChange}>
          <option value={true}>Available</option>
          <option value={false}>Unavailable</option>
        </select>
      </label>
      <label>
        Categoria:
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="">Seleccionar una Categoria</option>
          <option value="Platos">Platos</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Postres">Postres</option>
        </select>
      </label>
      <label>
        SubCategoria:
        <select name="subCategory" value={product.subCategory} onChange={handleChange}>
          <option value="">Seleccionar una subcategoria</option>
          <option value="Platos_tipicos">Platos Tipicos</option>
          <option value="Bebida_sin_alcohol">Bebida sin Alcohol</option>
          <option value="Bebida_con_alcohol">Bebida con Alcohol</option>
          <option value="Postres">Postres</option>
          <option value="Comida_Kiosco">Comida Kiosco</option>
        </select>
      </label>
      <label>
  Lugar de venta:
  <select name="saleTypes" multiple={true} value={product.saleTypes} onChange={handleSaleTypeChange}>
    <option value="Salon">Salon</option>
    <option value="Kiosco">Kiosco</option>
  </select>
</label>
      <button type="submit">Cargar Producto</button>
    </form>
  );
}

export default Form;