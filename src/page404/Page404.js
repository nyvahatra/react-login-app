import React from 'react';
import './Page404.css'

function Page404() {
  
    return (
        <div className='p-4 text-center' id='all_content'>
            <span id="icon"><i className="bi bi-exclamation-triangle-fill"></i></span> <br/>
            <span className='display-4'>Erreur 404 !!</span> <br/>
            <span className='display-4'>Page introuvable</span>
        </div>
    );
  
}

export default Page404;
