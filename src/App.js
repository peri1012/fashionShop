//Router
import { Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Catalogue from "./pages/Catalogue";
import Login from './pages/Login';
import Cart from './pages/Cart';
import Reset from './pages/Reset';
import CreateAccount from './pages/CreateAccount';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import { MainContext } from './utils/MainContext';



const App = () => {
  return (
<MainContext>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/create" element={<CreateAccount/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-page/:productID" element={<ProductPage/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
  </MainContext>
  )
}

export default App;
