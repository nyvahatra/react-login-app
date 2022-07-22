import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../menu/Menu";
import './Users.css';

function Users() {
    
    useEffect(() => {
      getAllUsers()
    })

    const Swal = require('sweetalert2')
    const toastSuccess = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1500,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Opération réussie'
          })
    }
    const toastWarning = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1500,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'Veuillez remplir les cases'
          })
    }
    const toastError = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1500,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Mot de passe incorrect'
          })
    }

    var url_api = 'http://localhost:4200'

    const [allUsers, setAllUsers] = useState([])

    const fullname = useRef('')
    const username = useRef('')
    const role = useRef('')
    const password = useRef('')
    const confirmPass = useRef('')

    const userAdd = {fullname:fullname.current.value, username:username.current.value, role:role.current.value, password:password.current.value, confirmPass:confirmPass.current.value}

    const getAllUsers = () => {
        axios.get(url_api+'/get-all-users').then(res => {
            setAllUsers(res.data)
        })
    }

    const resetAdd = () => {
        fullname.current.value = ''
        username.current.value = ''
        role.current.value = ''
        password.current.value = ''
        confirmPass.current.value = ''
    }

    const insertUser = () => {
        if(userAdd.fullname != '' && userAdd.username != '' && userAdd.role != '' && userAdd.password != '' && userAdd.confirmPass != ''){
            if(userAdd.password == userAdd.confirmPass){
                axios.post(url_api+'/insert-user',userAdd).then(function(data){
                    toastSuccess()
                    resetAdd()
                })
            } else {
                toastError()
                password.current.value = ''
                confirmPass.current.value = ''
            }
        } else {
            toastWarning()
        }
    }

    const deleteUser = (item_user) => {
        axios.post(url_api+'/delete-user',item_user).then(function(data){
            toastSuccess('Opération réussie')
        })
    }

    const updateUser = (user) => {
        fullname.current.value = user.fullname
        username.current.value = user.username
        role.current.value = user.role_user
    }
    
  const handleChange = (e, i) => {
    const { value, id } = e.target;
    
    const newState = [...allUsers];
    newState[i] = {
        ...newState[i],
        [id]: value
    };
    console.log(newState)
    setAllUsers(newState)
  }


  return (
    <div>
      <div className='bg-white rounded shadow p-4 text-center' id='all_content'>
        <div className='p-3'>
            <span className='h2 fw-normal'>Liste des utilisateurs</span>
        </div>
        <div className='p-1 mt-3' id="liste_user_content">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom et Prénom</th>
                        <th>Nom d'utilisateur</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((item, index) => 
                        <tr key={index}>
                            <td>{item.id_utilisateur}</td>
                            <td><input type="text" onChange={(e)=>handleChange(e,index)} value={item.fullname} id="fullname" className="form-control"/></td>
                            <td><input type="text" onChange={(e)=>handleChange(e,index)} value={item.username} id="username" className="form-control"/></td>
                            <td>
                                <select onChange={(e)=>handleChange(e,index)} value={item.role_user} id="role_user" className='form-control'>
                                    <option value="1">Niveau 1</option>
                                    <option value="2">Niveau 2</option>
                                    <option value="3">Niveau 3</option>
                                    <option value="admin">Administrateur</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-warning' onClick={()=>updateUser(item)}><i className="bi bi-pen-fill"></i></button>
                                <button className='btn btn-sm btn-danger ms-2' onClick={()=>deleteUser(item)}><i className="bi bi-trash3-fill"></i></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
            <input type="text" ref={fullname} className='form-control p-2' placeholder='Nom et Prénom'/>
            <input type="text" ref={username} className='form-control p-2 ms-2' placeholder="Nom d'utilisateur"/>
            <select ref={role} className='form-control p-2 ms-2'> 
                <option> </option>
                <option value="1">Niveau 1</option>
                <option value="2">Niveau 2</option>
                <option value="3">Niveau 3</option>
                <option value="admin">Administrateur</option>
            </select>
            <input type="password" ref={password} className='form-control p-2 ms-2' placeholder="Mot de passe"/>
            <input type="password" ref={confirmPass} className='form-control p-2 ms-2' placeholder="Confirmation"/>
            <button className='btn btn-primary btn-sm ms-2' onClick={insertUser}><i className="bi bi-person-plus"></i></button>
            <button className='btn btn-primary btn-sm ms-2'><i className="bi bi-person-plus"></i></button>
            <button className='btn btn-secondary btn-sm ms-2' onClick={resetAdd}><i className="bi bi-x-lg"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Users;
