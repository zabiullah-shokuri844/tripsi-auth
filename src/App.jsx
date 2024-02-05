import React from 'react';
import Login from './Login/login';
import Signup from './SignUp/Signup';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Login/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}
export default App;
