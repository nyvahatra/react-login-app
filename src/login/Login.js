import React, {useRef, useState} from 'react';
import { useCookies } from 'react-cookie';

function loginUser(credentials) {
    return fetch('http://localhost:4200/get-count-users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function getUser(credentials) {
    return fetch('http://localhost:4200/get-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function Login() {

    const Swal = require('sweetalert2')
    const toastError = () => {
      Swal.fire({
        icon: 'error',
        title: 'Mot de passe incorrect',
        showConfirmButton: false,
        timer: 700
      })
    }

    const toastWarning = () => {
      Swal.fire({
        icon: 'warning',
        title: 'Veuillez remplir les cases',
        showConfirmButton: false,
        timer: 700
      })
    }

    const [cookie, setCookie, removeCookie] = useCookies(['cookies'])

    const username = useRef("")
    const password = useRef("")
  
    const connexion = (username, password) => {
        if(username == "" || password == ""){
          toastWarning()
        } else {
          loginUser({username,password}).then(data =>{
              if(data[0].count == 1){
                  setCookie('isLoggedIn','true')
                  getUser({username,password}).then(data => {
                      setCookie('id_utilisateur',data[0].id_utilisateur)
                      setCookie('username',data[0].username)
                      setCookie('role_user',data[0].role_user)
                      window.location.reload()
                  })
              } else {
                toastError()
              }
          })
        }
    }

  return (
  <div>
  <div className='bg-white rounded border shadow-sm p-4 text-center' id='login_content'>
    <div className='p-3'>
      <span className='h1 fw-normal'>Login</span>
    </div>
    <div className='p-4 mt-3'>
      <input type="text" ref={username} placeholder="Nom d'utilisateur" className='form-control p-3'/>
      <input type="password" ref={password} placeholder="Mot de passe" className='form-control p-3 mt-2'/>
      <button type="submit" className='mt-3 btn btn-primary w-50' onClick={()=>connexion(username.current.value, password.current.value)}>Connexion</button>
    </div>
  </div>
  </div>
  );
}

export default Login;
