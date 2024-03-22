import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { ProductProvider } from './components/context/ProductContext';
import { AlisverisSepetiProvider } from './components/context/BucketContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductProvider>
      <AlisverisSepetiProvider>
        <App />
      </AlisverisSepetiProvider>
    </ProductProvider>
  </BrowserRouter>
);

reportWebVitals();
