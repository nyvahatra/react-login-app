import React from "react";
import Menu from "../menu/Menu";
import './Users.css';

function Users() {
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
                    <tr>
                        <td></td>
                        <td><input className='form-control' /></td>
                        <td><input className='form-control' /></td>
                        <td>
                            <select className='form-control'>
                                <option value="1">Niveau 1</option>
                                <option value="2">Niveau 2</option>
                                <option value="3">Niveau 3</option>
                                <option value="admin">Administrateur</option>
                            </select>
                        </td>
                        <td>
                            <button className='btn btn-sm btn-warning'><i class="bi bi-pen-fill"></i></button>
                            <button className='btn btn-sm btn-danger ms-2'><i class="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
            <input type="text" className='form-control p-2' placeholder='Nom et Prénom'/>
            <input type="text" className='form-control p-2 ms-2' placeholder="Nom d'utilisateur"/>
            <input type="password" className='form-control p-2 ms-2' placeholder="Mot de passe"/>
            <input type="password" className='form-control p-2 ms-2' placeholder="Confirmation"/>
            <button className='btn btn-primary btn-sm ms-2'><i class="bi bi-person-plus"></i></button>
            <button className='btn btn-secondary btn-sm ms-2'><i class="bi bi-x-lg"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Users;
