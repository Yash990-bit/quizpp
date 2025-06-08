import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Pricing from './components/Pricing'; 
import Enterprise from './components/Enterprise';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </>
  );
}
export default App;
