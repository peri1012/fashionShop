import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Style
import "./assets/sass/index.scss";

//Router
import { BrowserRouter } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Swiper from './components/Swiper';
import ShopHome from './components/ShopHome';
import ThreeCards from './components/ThreeCards';
import Find from './components/Find';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <Hero/>
    <Swiper/>
    <ShopHome/>
    <ThreeCards/>
    <Find/>
    <App />
    <Footer/>
  </BrowserRouter>
);

