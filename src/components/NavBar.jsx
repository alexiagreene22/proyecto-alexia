import React from 'react';
import CartWidget from './CartWidget';
import logo from '/images/logo.png';

function NavBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-personalizado">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Gelati Tuluse" width="100" height="100" />
          <h1 >Gelati Tuluse</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link p-3" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-3" href="/sucursales">Sucursales</a>
            </li>
            <li className="nav-item p-2">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


