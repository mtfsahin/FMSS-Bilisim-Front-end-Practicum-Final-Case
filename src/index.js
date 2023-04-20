import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/about';
import Starships from './components/starships';
import Details from './components/details';

import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
      <Route path="/" element={<App />} >
        <Route path="/about" element={<About />}>
        </Route>

        <Route path="/starships" element={<Starships />}>
          <Route path=":starsipId" element={<Details/>}></Route>
        </Route>

        <Route path="*" element={
          <main>
            <div className='text-center bg-cyan-500 p-4'>404 Page</div>
          </main>
        }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
