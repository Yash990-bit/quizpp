import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Pricing from './components/Pricing'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
