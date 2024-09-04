import { Route, Routes } from 'react-router-dom'; 
import LandingPage from './Views/LandingPage/landigPage';
import Home from './Views/Home/Home';
import Menu from './Views/Menu/Menu';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path = '/' element = {<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </div>
  );
}

export default App;
