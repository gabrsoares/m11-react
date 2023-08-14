import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';
import Registro from './Pages/Registro/Registro';

function AppRoutes({ newData, setNewData }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro setNewData={setNewData} newData={newData} />} />
      <Route path="/registro" element={<Registro newData={newData} />} />
    </Routes>
  );
}

export default AppRoutes;
