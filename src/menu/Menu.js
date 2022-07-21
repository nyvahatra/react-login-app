import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Product from '../product/Product';
import logo from '../logo.svg'
import Users from '../users/Users';
import App from '../App';

function Menu() {
    return (
        <BrowserRouter>
        <div className='text-center ps-3 pe-4 shadow-sm d-flex flex-row justify-content-between align-items-center bg-dark'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <img src={logo} width="90" height="90"/>
                <span className='text-white fs-5'>React App</span>
            </div>
            <div className='w-75 text-center'>
                <NavLink className='btn text-white fs-5' to="/products">Produits</NavLink>
                <NavLink className='btn text-white fs-5 ms-5' to="/users">Utilisateurs</NavLink>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/products" element={<Product />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                </Routes>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <span className='text-white'>Ny Vahatra</span>
                    <i className="bi bi-person-circle text-white ms-3 fs-5"></i>
                </div>
                <NavLink className="btn btn-sm btn-primary text-white mt-1" to="/">Déconnexion</NavLink>  
            </div>
        </div>
        </BrowserRouter>
  );
}

export default Menu;
