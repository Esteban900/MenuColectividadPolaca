import { Route, Routes } from 'react-router-dom'; 
import LandingPage from './Views/LandingPage/landigPage';
import Home from './Views/Home/Home';
import Menu from './Views/Menu/Menu';
import Form from './Views/FormProduct/FormProduct';
import SaleTypeForm from './Views/SalesTypes/SalesTypesForm';
import Reina from './Views/ReinaVirtual/ReinaVirtual';
import AcercaDe from './Views/AcercaDe/AcercaDe';
import Detail from './Views/Details/Details';
import Kiosco from './Views/Kiosco/Kiosco';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path = '/' element = {<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/salestypes' element={<SaleTypeForm/>}/>
    <Route path='/reina' element={<Reina/>}/>
    <Route path='/acercade' element={<AcercaDe/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='/kiosco' element={<Kiosco/>}/>
    </Routes>
    </div>
  );
}

export default App;
