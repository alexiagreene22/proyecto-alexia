import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '/images/logo.png';

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const handleCloseCart = () => {
    setActive(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-light bg-personalizado" >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Gelati Tuluse" width="100" height="100" />
            <h1>Gelati Tuluse</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" style={{marginRight: "20px"}} href="/productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{marginRight: "30px"}} href="/sucursales">
                  Sucursales
                </a>
              </li>
              {/* Sección del carrito */}
              <li className="nav-item p-2 w-100">
                <div className="container-icon">
                  <div
                    className="container-cart-icon"
                    onClick={() => setActive(!active)}
                  >
                    <div className="count-products">
                      <CartWidget />
                      <span id="contador-productos">{countProducts}</span>
                    </div>
                  </div>
                  <div
                    className={`container-cart-products ${
                      active ? '' : 'hidden-cart'
                    }`}
                  >
                    {allProducts.length ? (
                      <>
                        <div className="row-product">
                          {allProducts.map((product) => (
                            <div
                              className="cart-product"
                              key={product.id}
                            >
                              <div className="info-cart-product">
                                <span className="cantidad-producto-carrito">
                                  {product.quantity}
                                </span>
                                <p className="titulo-producto-carrito">
                                  {product.nameProduct}
                                </p>
                                <span className="precio-producto-carrito">
                                  ${product.price}
                                </span>
                              </div>
                              <span
                                className="close-cart"
                                onClick={() => onDeleteProduct(product)}
                              >
                                X
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="cart-total">
                          <h3>Total:</h3>
                          <span className="total-pagar">${total}</span>
                        </div>

                        {allProducts.length > 0 && (
                          <Link to="/whatsapp" className="btn btn-success mb-2" style={{marginRight: "5px"}}>
                            Enviar pedido!
                          </Link>
                       )}

                        <button
                          className="btn btn-outline-danger mb-2"
                          onClick={onCleanCart}
                        >
                          <a className="nav-link" href="/productos">
                            <i
                              className="bi bi-trash3"
                              style={{ color: 'red' }}
                            ></i>
                          </a>
                        </button>
                      </>
                    ) : (
                      <p className="cart-empty p-2">
                        El carrito está vacío
                        <span
                          className="close-cart"
                          onClick={handleCloseCart}
                        >
                          x
                        </span>
                      </p>
                    )}

                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
