//Router
import { Route, Routes,useLocation } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Catalogue from "./pages/Catalogue";
import Login from './pages/Login';
import Cart from './pages/Cart';
import Reset from './pages/Reset';
import Account from './pages/Account';
import CreateAccount from './pages/CreateAccount';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Otp from './pages/Otp';
import Profile from './pages/Profile';
import ChangePass from './pages/ChangePass';
import { MainContext } from './utils/MainContext';
import { AuthContext } from './utils/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoutes from './routers/privateRouter';
import CheckOut from './pages/CheckOut';



const App = () => {
  const location = useLocation();

  const isCheckoutPage = () => {
    return location.pathname.includes('/check-out');
  };

  return (
    <AuthContext>
      <MainContext>
      {!isCheckoutPage() && <Header />}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/create" element={<CreateAccount/>} />
            <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/change-password" element={<ChangePass />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/check-out" element={<CheckOut />} />
          </Route>
            <Route path="/product-page/:productID" element={<ProductPage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          {!isCheckoutPage() && <Footer />}
        </MainContext>
    </AuthContext>

  )
}

export default App;
