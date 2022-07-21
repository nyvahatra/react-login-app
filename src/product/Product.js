import './Product.css';

function Product() {
  return (
    <div>
      <div className='bg-white rounded shadow p-4 text-center' id='all_content'>
        <div className='p-3'>
            <span className='h2 fw-normal'>Liste des produits</span>
        </div>
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
                            <button className='btn btn-sm btn-warning'><i class="bi bi-pen-fill"></i></button>
                            <button className='btn btn-sm btn-danger ms-2'><i class="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
            <input type="text" className='form-control p-2' placeholder='Nom du produit'/>
            <input type="number" step="0.01" className='form-control p-2 ms-2' placeholder="Prix"/>
            <button className='btn btn-primary btn-sm ms-2'><i class="bi bi-plus-circle"></i></button>
            <button className='btn btn-secondary btn-sm ms-2'><i class="bi bi-x-lg"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Product;