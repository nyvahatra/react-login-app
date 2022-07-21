import './App.css';
import Menu from './menu/Menu';

function App() {
  return (
    <div>
      <div className='bg-white rounded border shadow-sm p-4 text-center' id='login_content'>
        <div className='p-3'>
          <span className='h2 fw-normal'>Login</span>
        </div>
        <div className='p-4 mt-3'>
          <input placeholder="Nom d'utilisateur" className='form-control p-3'/>
          <input placeholder="Mot de passe" className='form-control p-3 mt-2'/>
          <button className='mt-3 btn btn-primary w-50'>Connexion</button>
        </div>
      </div>
    </div>
  );
}

export default App;
