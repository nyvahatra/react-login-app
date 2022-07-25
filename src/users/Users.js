import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import './Users.css';

function Users() {
    
    useEffect(() => {
      getAllUsers()
    })

    const Swal = require('sweetalert2')
    const toastSuccess = (message) => {
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
            title: message
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
            title: 'Veuillez remplir les champs'
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
    const id_utilisateur = useRef('')

    const userAdd = {id_utilisateur:id_utilisateur.current.value, fullname:fullname.current.value, username:username.current.value, role:role.current.value, password:password.current.value, confirmPass:confirmPass.current.value} 

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
        id_utilisateur.current.value = ''
    }

    const insert_update_user = () => {
        if(userAdd.id_utilisateur == ''){
            if(userAdd.fullname != '' && userAdd.username != '' && userAdd.role != '' && userAdd.password != '' && userAdd.confirmPass != ''){
                if(userAdd.password == userAdd.confirmPass){
                    axios.post(url_api+'/insert-user',userAdd).then(function(data){
                        toastSuccess('Utilisateur ajouté !')
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
        } else {
            if(userAdd.fullname != '' && userAdd.username != '' && userAdd.role != '' && userAdd.password != '' && userAdd.confirmPass != ''){
                if(userAdd.password == userAdd.confirmPass){
                    axios.post(url_api+'/update-user',userAdd).then(function(data){
                        toastSuccess('Modification réussie !')
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
    }

    const deleteUser = (item_user) => {
        axios.post(url_api+'/delete-user',item_user).then(function(data){
            toastSuccess('Utilisateur supprimé !')
        })
    }

    const toUpdateUser = (user) => {
        id_utilisateur.current.value = user.id_utilisateur
        fullname.current.value = user.fullname
        username.current.value = user.username
        role.current.value = user.role_user
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
                            <td>{item.fullname}</td>
                            <td>{item.username}</td>
                            <td>{item.role_user}</td>
                            <td>
                                <button className='btn btn-sm btn-warning' onClick={()=>toUpdateUser(item)}><i className="bi bi-pen-fill"></i></button>
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
            <input type="hidden" ref={id_utilisateur} />
            <input type="password" ref={password} className='form-control p-2 ms-2' placeholder="Mot de passe"/>
            <input type="password" ref={confirmPass} className='form-control p-2 ms-2' placeholder="Confirmation"/>
            <button className='btn btn-primary btn-sm ms-2' onClick={insert_update_user}><i class="bi bi-check-lg"></i></button>
            <button className='btn btn-secondary btn-sm ms-2' onClick={resetAdd}><i className="bi bi-x-lg"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Users;
