import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Product from '../product/Product';
import logo from '../logo.svg'
import Users from '../users/Users';
import { useCookies } from 'react-cookie';
import Page404 from '../page404/Page404';
import './Menu.css';

function menuCondition(role_user){
    if(role_user == "admin"){
        return(
            <>
                <NavLink className='btn text-white fs-5 w-25' to="/">Produits</NavLink>
                <NavLink className='btn text-white fs-5 ms-5 w-25' to="/users">Utilisateurs</NavLink>
                <Routes>
                    <Route path="/" element={<Product />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </>
        );
    } else {
        return(
            <>
                <NavLink className='btn text-white fs-5 w-25' to="/">Produits</NavLink>
                <Routes>
                    <Route path="/" element={<Product />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </>
        );
    }
}

function Menu(){

    const [cookie, setCookie, removeCookie] = useCookies(['cookies'])
    let contenu = menuCondition(cookie.role_user)

    const deconnexion = (e) => {
        e.preventDefault();
        removeCookie('isLoggedIn')
        removeCookie('id_utilisateur')
        removeCookie('username')
        removeCookie('role_user')
        window.location.reload()
    }

    return (
        <BrowserRouter>
        <div className='text-center ps-3 pe-4 shadow-sm d-flex flex-row justify-content-between align-items-center bg-dark'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <img src={logo} width="90" height="90" id="logoReact"/>
                <span className='text-white fs-4'>React App</span>
            </div>
            <div className='w-75 btn-secondary text-center'>
                {contenu}
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <span className='text-white'>{cookie.username}</span>
                    <i className="bi bi-person-circle text-white ms-3 fs-5"></i>
                </div>
                <div>
                    <button className="btn btn-danger text-white mt-1 ms-4" onClick={e => deconnexion(e)}><i className="bi bi-box-arrow-right"></i></button>  
                </div>
            </div>
        </div>
        </BrowserRouter>
  );
}

export default Menu;
