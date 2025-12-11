import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./pages/Login.jsx";
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Navigate to = '/admin-dashboard'/>}></Route>
          <Route path = '/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
