import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from './NavBar.module.css';
import { getProductsSubCategorias } from "../../redux/actions";

const NavBar = ({ defaultSelectedMenu, defaultSelectedOption }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedMenu, setSelectedMenu] = useState(defaultSelectedMenu);
    const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
    const [selectedPlatoOption, setSelectedPlatoOption] = useState('');
    const [selectedBebidaOption, setSelectedBebidaOption] = useState('');

    useEffect(() => {
        if (defaultSelectedMenu === 'Platos Tipicos') {
            setSelectedMenu('Platos Tipicos');
            setSelectedPlatoOption(defaultSelectedOption);
            setSelectedBebidaOption('');
            dispatch(getProductsSubCategorias('Salon', 'Platos Tipicos', defaultSelectedOption));
        } else if (defaultSelectedMenu === 'Bebidas') {
            setSelectedMenu('Bebidas');
            setSelectedPlatoOption('');
            setSelectedBebidaOption(defaultSelectedOption);
            dispatch(getProductsSubCategorias('Salon', 'Bebidas', defaultSelectedOption));
        }
    }, [defaultSelectedMenu, defaultSelectedOption, dispatch]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleBackMenuClick = () => {
        navigate('/');
    };

    const platosOptions = ['Platos Tipicos', 'Postres Tradicionales'];
    const bebidasOptions = ['Bebidas sin alcohol', 'Bebidas con alcohol', 'Tragos Tipicos', 'Cafeteria'];

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu);
        if (menu === 'Platos Tipicos') {
            setSelectedPlatoOption('Platos Tipicos');
            setSelectedBebidaOption('');
            let subcategory = 'Platos Tipicos';
            dispatch(getProductsSubCategorias('Salon', menu, subcategory));
        } else if (menu === 'Bebidas') {
            setSelectedBebidaOption('Bebidas sin alcohol');
            setSelectedPlatoOption('');
            let subcategory = 'Bebidas sin alcohol';
            dispatch(getProductsSubCategorias('Salon', menu, subcategory));
        }
    };

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        let subcategory = 'Platos Tipicos';
        dispatch(getProductsSubCategorias('Salon', menu, subcategory));
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        dispatch(getProductsSubCategorias('Salon', selectedMenu, option));
    };
//HANDLE PARA PLATOS O BEBIDAS 1° MENU
    const handlePlatoOptionClick = (option) => {
        setSelectedPlatoOption(option);
        setSelectedOption(option);
        dispatch(getProductsSubCategorias('Salon', 'Platos Tipicos', option));
    };
// HANDLE PARA BEBIDAS
    const handleBebidaOptionClick = (option) => {
        setSelectedBebidaOption(option);
        setSelectedOption(option);
        dispatch(getProductsSubCategorias('Salon', 'Bebidas', option));
    };

    return (
        <div className={style.navBarContainer}>
            <div className={style.navbar}>
                <div onClick={handleBackMenuClick} className={style.imageContainer}>
                    <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
                </div>
                <div onClick={handleBackClick} className={style.buttonBack}>
                    <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={style.logoBack} />
                </div>

                <button
                    className={`${style.navButton} ${selectedMenu === "Platos Tipicos" ? style.active : ''}`}
                    onClick={() => { handleMenuClick("Platos Tipicos"); handleMenuChange('Platos Tipicos'); }}
                >
                    Platos Tipicos
                </button>
                <button
                    className={`${style.navButton} ${selectedMenu === "Bebidas" ? style.active : ''}`}
                    onClick={() => { handleMenuClick("Bebidas"); handleMenuChange('Bebidas'); }}
                >
                    Bebidas
                </button>

                    </div>
                <div className={style.menuOptions}>
                    {selectedMenu === 'Platos Tipicos' && platosOptions.map((option, index) => (
                        <button
                            key={index}
                            className={`${style.optionButton} ${selectedPlatoOption === option ? style.active : ''}`}
                            onClick={() => handlePlatoOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}

                    {selectedMenu === 'Bebidas' && bebidasOptions.map((option, index) => (
                        <button
                            key={index}
                            className={`${style.optionButton} ${selectedBebidaOption === option ? style.active : ''}`}
                            onClick={() => handleBebidaOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
        </div>
    );
};

export default NavBar;



// import React, { useState , useEffect} from "react";
// import { useDispatch } from "react-redux";
// import style from './NavBar.module.css';
// import { getProductsSubCategorias } from "../../redux/actions";


// // import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";




// const NavBar = ({ defaultSelectedMenu, defaultSelectedOption }) => {
//     const dispatch = useDispatch();

//     // Estado local para la selección de categoría y subcategoría
//     const [selectedMenu, setSelectedMenu] = useState(defaultSelectedMenu);
//     const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

    
//   const [selectedPlatoOption, setSelectedPlatoOption] = useState(''); // Opción seleccionada de platos
//   const [selectedBebidaOption, setSelectedBebidaOption] = useState(''); // Opción seleccionada de bebidas

//   const navigate = useNavigate();

//   //   // UseEffect para establecer los valores por defecto
//   //   useEffect(() => {
//   //     if (defaultSelectedMenu) {
//   //       setSelectedMenu(defaultSelectedMenu);
//   //     }
//   //     if (defaultSelectedMenu === 'Platos Tipicos' && defaultSelectedOption) {
//   //       setSelectedPlatoOption(defaultSelectedOption);
//   //     } else if (defaultSelectedMenu === 'Bebidas') {
//   //       setSelectedBebidaOption('Bebidas sin alcohol'); // Selección por defecto para bebidas
//   //     }
//   //   }, [defaultSelectedMenu, defaultSelectedOption]);
  
//     const handleBackClick = () => {
//       navigate(-1); // Regreso a la página anterior
//     };
  
//     const handlBackMenuClick = () => {
//       navigate('/'); // Redirige a la página de inicio o landing page
//     };
  
//     const platosOptions = ['Todos', 'Platos Tipicos', 'Postres Tradicionales'];
//     const bebidasOptions = ['Bebidas sin alcohol', 'Bebidas con alcohol', 'Tragos tipicos', 'Cafeteria'];
  
//     const handleMenuChange = (menu) => {
//       setSelectedMenu(menu);
  
//       // Si seleccionas "Platos Tipicos", por defecto selecciona la opción "Todos"
//       if (menu === 'Platos Tipicos') {
//         setSelectedPlatoOption('Todos');
//         setSelectedBebidaOption(''); // Desmarcar cualquier opción de bebidas
//       } else if (menu === 'Bebidas') {
//         setSelectedBebidaOption('Bebidas sin alcohol'); // Selección por defecto para bebidas
//         setSelectedPlatoOption(''); // Desmarcar cualquier opción de platos
//       }
//     };
  
//     const handlePlatoOptionClick = (option) => {
//       setSelectedPlatoOption(option);
//     };
  
//     const handleBebidaOptionClick = (option) => {
//       setSelectedBebidaOption(option);
//     };

//     // Manejar selección de categorías en el NavBar
//     const handleMenuClick = (menu) => {
//         setSelectedMenu(menu);
//         let subcategory = "todos"; // Subcategoría por defecto
        
//         // Despachar la acción para filtrar los productos
//         dispatch(getProductsSubCategorias('salon', menu, subcategory));
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         // Despachar la acción para filtrar productos con subcategoría
//         dispatch(getProductsSubCategorias('salon', selectedMenu, option));
//     };


//     return (
      
         
//          <div className={style.navBarContainer}>
//         <div className={style.navbar}>
//         <div onClick={handleMenuClick} className={style.imageContainer}>
//                <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
//              </div>
//              <div onClick={handleBackClick} className={style.buttonBack}>
//                 <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={style.logoBack} />
//               </div>

                
//                 <button className={`${style.navButton} ${selectedMenu === "Platos Tipicos" ? style.selected : ""}`} onClick={() => { handleMenuClick("Platos Tipicos"); handleMenuChange('Platos Tipicos'); }} >
//                     Platos Típicos
//                 </button>
//                 <button className={` ${style.navButton}  ${selectedMenu === "Bebidas" ? style.selected : ""}`} onClick={() => handleMenuClick("Bebidas") ; handleMenuChange('Bebidas')}>
//                     Bebidas
//                 </button>

       

//         <div className={style.menuOptions}>
//                 <button className={`${style.optionButton}${selectedOption === "todos" ? style.active : ""}`} onClick={() => handleOptionClick("todos"),() => handlePlatoOptionClick(option)}>
//                     Todos
//                 </button>

//                 {selectedMenu === 'Bebidas' && bebidasOptions.map((option, index) => (
//                  <button
//                    key={index}
//                    className={`${style.optionButton} ${selectedBebidaOption === option ? style.active : ''}`}
//                   onClick={() => handleBebidaOptionClick(option),() => handleOptionClick("Sin Alcohol")}
//                  >
//                    {option}
//                  </button>
//                ))}
             
//             </div>
//         </div>
//         </div>
//     );
// };

// export default NavBar;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import style from './NavBar.module.css';

// const NavBar = ({ defaultSelectedMenu, defaultSelectedOption }) => {
//   const [selectedMenu, setSelectedMenu] = useState(null); // Menú principal seleccionado
//   const [selectedPlatoOption, setSelectedPlatoOption] = useState(''); // Opción seleccionada de platos
//   const [selectedBebidaOption, setSelectedBebidaOption] = useState(''); // Opción seleccionada de bebidas

//   const navigate = useNavigate();

//   // UseEffect para establecer los valores por defecto
//   useEffect(() => {
//     if (defaultSelectedMenu) {
//       setSelectedMenu(defaultSelectedMenu);
//     }
//     if (defaultSelectedMenu === 'Platos Tipicos' && defaultSelectedOption) {
//       setSelectedPlatoOption(defaultSelectedOption);
//     } else if (defaultSelectedMenu === 'Bebidas') {
//       setSelectedBebidaOption('Bebidas sin alcohol'); // Selección por defecto para bebidas
//     }
//   }, [defaultSelectedMenu, defaultSelectedOption]);

//   const handleBackClick = () => {
//     navigate(-1); // Regreso a la página anterior
//   };

//   const handleMenuClick = () => {
//     navigate('/'); // Redirige a la página de inicio o landing page
//   };

//   const platosOptions = ['Todos', 'Platos Tipicos', 'Postres Tradicionales'];
//   const bebidasOptions = ['Bebidas sin alcohol', 'Bebidas con alcohol', 'Tragos tipicos', 'Cafeteria'];

//   const handleMenuChange = (menu) => {
//     setSelectedMenu(menu);

//     // Si seleccionas "Platos Tipicos", por defecto selecciona la opción "Todos"
//     if (menu === 'Platos Tipicos') {
//       setSelectedPlatoOption('Todos');
//       setSelectedBebidaOption(''); // Desmarcar cualquier opción de bebidas
//     } else if (menu === 'Bebidas') {
//       setSelectedBebidaOption('Bebidas sin alcohol'); // Selección por defecto para bebidas
//       setSelectedPlatoOption(''); // Desmarcar cualquier opción de platos
//     }
//   };

//   const handlePlatoOptionClick = (option) => {
//     setSelectedPlatoOption(option);
//   };

//   const handleBebidaOptionClick = (option) => {
//     setSelectedBebidaOption(option);
//   };

//   return (
//     <div className={style.navBarContainer}>
//       <div className={style.navBar}>
//         <div onClick={handleMenuClick} className={style.imageContainer}>
//           <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725428808/banderaInicio2_drufr0.jpg" alt="Bandera de Polonia" className={style.logo} />
//         </div>
//         <div onClick={handleBackClick} className={style.buttonBack}>
//           <img src="https://res.cloudinary.com/dmqszpq9k/image/upload/v1725438888/ATRAS2_p6ic2j.png" alt="regresar" className={style.logoBack} />
//         </div>
//         <button
//           className={`${style.navButton} ${selectedMenu === 'Platos Tipicos' ? style.active : ''}`}
//           onClick={() => handleMenuChange('Platos Tipicos')}
//         >
//           Platos Típicos
//         </button>
//         <button
//           className={`${style.navButton} ${selectedMenu === 'Bebidas' ? style.active : ''}`}
//           onClick={() => handleMenuChange('Bebidas')}
//         >
//           Bebidas
//         </button>
//       </div>

//       <div className={style.menuOptions}>
//         {selectedMenu === 'Platos Tipicos' && platosOptions.map((option, index) => (
//           <button
//             key={index}
//             className={`${style.optionButton} ${selectedPlatoOption === option ? style.active : ''}`}
//             onClick={() => handlePlatoOptionClick(option)}
//           >
//             {option}
//           </button>
//         ))}

//         {selectedMenu === 'Bebidas' && bebidasOptions.map((option, index) => (
//           <button
//             key={index}
//             className={`${style.optionButton} ${selectedBebidaOption === option ? style.active : ''}`}
//             onClick={() => handleBebidaOptionClick(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NavBar;



