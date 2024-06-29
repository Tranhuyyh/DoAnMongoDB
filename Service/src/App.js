
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import Login from './register/Login/log in/login';
import MasterLayout from './masterLayout/masterLayout';
import Home from "./Page/HomePage/Home";
import Shopping from "./Page/ShopPage/Shop";
import Admin from './Page/AdminPage/Admin';
import Create from './CRUD/Create/create';
import Edit from './CRUD/Edit/update';
import Detail from './Page/Detail/Detail';


function App() {


  return (
    <div>
    
          <Routes>
          <Route path='/' element={<MasterLayout children={<Home />} />} />
          <Route path='/Shop' element={<MasterLayout children={<Shopping/>}/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Edit/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
        </Routes>



    </div>

  );
}

export default App;
