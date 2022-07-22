import './App.css';
import React, {useState} from 'react';
import Menu from './menu/Menu';
import Login from './login/Login';
import { useCookies } from 'react-cookie';

function App() {
  
  const [cookie, setCookie, removeCookie] = useCookies(['cookies'])

  if(cookie.isLoggedIn == "true" && cookie.username != ""){
    return <Menu/>
  } else {
    return <Login/>
  }

}

export default App;
