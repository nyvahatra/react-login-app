import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import App from '../App';

function loginUser(credentials) {
    return fetch('http://localhost:4200/get-all-users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function Login() {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [cookie, setCookie, removeCookie] = useCookies(['cookies'])
  
    const connexion = (e) => {
        e.preventDefault();
        loginUser({username,password}).then(data =>{
            if(data[0].count == 1){
                setCookie('isLoggedIn','true')
                setCookie('username',username)
                window.location.reload()
            }
        })
    }

  return (
    <div>
    <div className='bg-white rounded border shadow-sm p-4 text-center' id='login_content'>
      <div className='p-3'>
        <span className='h1 fw-normal'>Login</span>
      </div>
      <div className='p-4 mt-3'>
        <form onSubmit={connexion}>
          <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" className='form-control p-3'/>
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" className='form-control p-3 mt-2'/>
          <button type="submit" className='mt-3 btn btn-primary w-50'>Connexion</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;