import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FirebaseContextProvider } from './utils/context/FirebaseContext';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContextProvider>
  </React.StrictMode>,
);
