import './Product.css';
import { useCookies } from 'react-cookie';

function fonctionCondition(role_user){
    if(role_user == "1"){
        return(
            <>
                <div className='p-1 mt-3' id="liste_product_content">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom du produit</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
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
                                <th>ID</th>
                                <th>Nom du produit</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
                    <input type="text" className='form-control p-2' placeholder='Nom du produit'/>
                    <input type="number" step="0.01" className='form-control p-2 ms-2' placeholder="Prix"/>
                    <button className='btn btn-primary btn-sm ms-2'><i className="bi bi-plus-circle"></i></button>
                    <button className='btn btn-secondary btn-sm ms-2'><i className="bi bi-x-lg"></i></button>
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
                                <th>ID</th>
                                <th>Nom du produit</th>
                                <th>Prix</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input className='form-control' /></td>
                                <td><input className='form-control' /></td>
                                <td>
                                    <button className='btn btn-sm btn-warning'><i className="bi bi-pen-fill"></i></button>
                                    <button className='btn btn-sm btn-danger ms-2'><i className="bi bi-trash3-fill"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
                    <input type="text" className='form-control p-2' placeholder='Nom du produit'/>
                    <input type="number" step="0.01" className='form-control p-2 ms-2' placeholder="Prix"/>
                    <button className='btn btn-primary btn-sm ms-2'><i className="bi bi-plus-circle"></i></button>
                    <button className='btn btn-secondary btn-sm ms-2'><i className="bi bi-x-lg"></i></button>
                </div>
            </>
        );
    }
}

function Product() {

    const [cookie, setCookie, removeCookie] = useCookies(['cookies'])
    let contenu = fonctionCondition(cookie.role_user)

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
