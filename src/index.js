import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Style
import "./assets/sass/index.scss";

//Router
import { BrowserRouter } from 'react-router-dom';

//Components



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

