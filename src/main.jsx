import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import './index.css';
import Pricing from './components/Pricing.jsx';
import Enterprise from './components/Enterprise.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enterprise" element={<Enterprise/>} />
      </Routes>
    </BrowserRouter>

);
