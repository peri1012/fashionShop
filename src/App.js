//Router
import { Route, Routes } from 'react-router-dom';

//Pages
import Catalogue from "./pages/Catalogue";
import Login from './pages/Login';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//sections
import Hero from './components/Hero';
import Swiper from './components/Swiper';
import ShopHome from './components/ShopHome';
import ThreeCards from './components/ThreeCards';
import Find from './components/Find';

const App = () => {
  return (
  <>
    <Header/>
    <Hero/>
    <Swiper/>
    <ShopHome/>
    <ThreeCards/>
    <Find/>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/catalogue" element={<Catalogue/>}/>
      {/* <Route path="*" element={<NotFound/>}/> */}
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App;
