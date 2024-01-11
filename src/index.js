import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './appPerformance/reportWebVitals';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SudukoPage from './suduko/sudukoPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}/> 
          <Route path="/home" element={<App />}/> 
          <Route path="/suduko" element={<SudukoPage />} />
        </Routes>
      </Router>
  </React.StrictMode>

);


/*
  <React.StrictMode>
    <App />
  </React.StrictMode>
*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
