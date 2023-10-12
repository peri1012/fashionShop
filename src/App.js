//Router
import { Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Catalogue from "./pages/Catalogue";
import Login from './pages/Login';
import Cart from './pages/Cart';
import Reset from './pages/Reset';
import CreateAccount from './pages/CreateAccount';



const App = () => {
  return (

<>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/create" element={<CreateAccount/>} />
        <Route path="/cart" element={<Cart />} />
        </Routes>

  </>
  )
}

export default App;
