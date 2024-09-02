import { Route, Routes } from 'react-router-dom'; 
import LandingPage from './Views/LandingPage/landigPage';
import HomeMenu from './Views/HomeMenu/homeMenu';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path = '/' element = {<LandingPage/>}/>
    <Route path='/home-menu' element={<HomeMenu />} />
    </Routes>
    </div>
  );
}

export default App;
