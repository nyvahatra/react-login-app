import './Product.css';
import { useCookies } from 'react-cookie';
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

function fonctionCondition(role_user, allProducts, productName, productPrice, url_api, id_produit){

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

    const addProducts = {id_produit:id_produit.current.value, nom_produit:productName.current.value, prix_produit:productPrice.current.value}

    const insert_update_product = () => {
        if(addProducts.id_produit == ''){
            if(addProducts.nom_produit != '' && addProducts.prix_produit != ''){
                axios.post(url_api+'/insert-produit', addProducts).then(function(data){
                    toastSuccess('Produit inséré !')
                    resetAdd()
                })
            } else {
                toastWarning()
            }
        } else {
            if(addProducts.nom_produit != '' && addProducts.prix_produit != ''){
                axios.post(url_api+'/update-produit', addProducts).then(function(data){
                    toastSuccess('Modification réussie !')
                    resetAdd()
                })
            } else {
                toastWarning()
            }
        }
    }

    const deleteProduct = (item_product) => {
        axios.post(url_api+'/delete-produit',item_product).then(function(data){
            toastSuccess('Produit supprimé !')
        })
    }

    const toUpdate = (product) => {
        id_produit.current.value = product.id_produit
        productName.current.value = product.nom_produit
        productPrice.current.value = product.prix_produit
    }

    const resetAdd = () => {
        id_produit.current.value = ''
        productName.current.value = ''
        productPrice.current.value = ''
    }
    
    if(role_user == "1"){
        return(
            <>
                <div className='p-1 mt-3' id="liste_product_content">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th id="col_id">ID</th>
                                <th id="col_nom">Nom du produit</th>
                                <th id="col_prix">Prix (Ar)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allProducts.map((item, index) => 
                            <tr key={index}>
                                <td>{item.id_produit}</td>
                                <td>{item.nom_produit}</td>
                                <td>{item.prix_produit}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    } else if(role_user == "2"){
        return(
            <>
                <div className='p-1 mt-3' id="liste_product_content">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th id="col_id">ID</th>
                                <th id="col_nom">Nom du produit</th>
                                <th id="col_prix">Prix (Ar)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.id_produit}</td>
                                    <td>{item.nom_produit}</td>
                                    <td>{item.prix_produit}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
                    <input type="hidden" ref={id_produit}/>
                    <input type="text" ref={productName} className='form-control p-2' placeholder='Nom du produit'/>
                    <input type="number" ref={productPrice} step="0.01" min="0" className='form-control p-2 ms-2' placeholder="Prix"/>
                    <button className='btn btn-primary btn-sm ms-2' onClick={insert_update_product}><i class="bi bi-check-lg"></i></button>
                    <button className='btn btn-secondary btn-sm ms-2' onClick={resetAdd}><i className="bi bi-x-lg"></i></button>
                </div>
            </>
        );
    } else {
        return(
            <>    
                <div className='p-1 mt-3' id="liste_product_content">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th id="col_id">ID</th>
                                <th id="col_nom">Nom du produit</th>
                                <th id="col_prix">Prix (Ar)</th>
                                <th id="col_action">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.id_produit}</td>
                                    <td>{item.nom_produit}</td>
                                    <td>{item.prix_produit}</td>
                                    <td>
                                        <button className='btn btn-sm btn-warning' onClick={()=>toUpdate(item)}><i className="bi bi-pen-fill"></i></button>
                                        <button className='btn btn-sm btn-danger ms-2' onClick={()=>deleteProduct(item)}><i className="bi bi-trash3-fill"></i></button>
                                    </td>  
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
                    <input type="hidden" ref={id_produit}/>
                    <input type="text" ref={productName} className='form-control p-2' placeholder='Nom du produit'/>
                    <input type="number" ref={productPrice} step="0.01" min="0" className='form-control p-2 ms-2' placeholder="Prix"/>
                    <button className='btn btn-primary btn-sm ms-2' onClick={insert_update_product}><i class="bi bi-check-lg"></i></button>
                    <button className='btn btn-secondary btn-sm ms-2' onClick={resetAdd}><i className="bi bi-x-lg"></i></button>
                </div>
            </>
        );
    }
}

function Product() {

    useEffect(() => {
        getAllProducts()
    })

    var url_api = 'http://localhost:4200'

    const [allProducts, setProduct] = useState([])

    const id_produit = useRef("")
    const productName = useRef("")
    const productPrice = useRef("")

    const getAllProducts = () => {
        axios.get(url_api+'/get-all-products').then(res => {
            setProduct(res.data)
        })
    }

    const [cookie, setCookie, removeCookie] = useCookies(['cookies'])
    let contenu = fonctionCondition(cookie.role_user, allProducts, productName, productPrice, url_api, id_produit)

  return (
    <div>
      <div className='bg-white rounded shadow p-4 text-center' id='all_content'>
        <div className='p-3'>
            <span className='h2 fw-normal'>Liste des produits</span>
        </div>
        {contenu}
      </div>
    </div>
  );
}

export default Product;
