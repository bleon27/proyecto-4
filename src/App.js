import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './UI/pages/Welcome';
import Menu from './UI/pages/Menu';
import Contacts from './UI/pages/Contacts';
import Cart from './UI/pages/Cart';
import Reservations from './UI/pages/Reservations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/contactanos' element={<Contacts />}></Route>
        <Route path='/carrtito' element={<Cart />}></Route>
        <Route path='/reservaciones' element={<Reservations />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
