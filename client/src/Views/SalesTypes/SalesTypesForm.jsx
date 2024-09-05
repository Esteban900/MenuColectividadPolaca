import React, { useState } from 'react';
import styles from './SalesTypesForm.module.css';

const SaleTypeForm = () => {
  const [saleType, setSaleType] = useState({
    name_lugar_venta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleType({
      ...saleType,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(saleType);
    // Aquí podrías agregar la lógica para enviar el formulario a tu backend
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Sale Type Name:
        <input
          type="text"
          name="name_lugar_venta"
          value={saleType.name_lugar_venta}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SaleTypeForm;