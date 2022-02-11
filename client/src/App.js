import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ResetPassword from './components/Auth/ResetPassword';
import Home from './components/Home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<Login />} />
          <Route path = '/signup' element = {<Signup />} />
          <Route path = '/resetpassword' element = {<ResetPassword />} />
          <Route path = '/home' element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
