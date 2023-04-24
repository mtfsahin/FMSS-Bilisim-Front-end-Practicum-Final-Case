import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import BooksContextProvider

//import BrowserRouter

import {
  BrowserRouter,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //render  App component inside the BrowserRouter 
  <BrowserRouter>
  {/* and BooksContextProvider components */}
      <App/>
  </BrowserRouter>
);

reportWebVitals();
