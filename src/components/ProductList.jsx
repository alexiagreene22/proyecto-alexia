import { data } from '../data';


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        {data.map((product) => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <div className="item">
              <figure>
                <img
                  className="rounded"
                  src={product.img}
                  alt={product.nameProduct}
                />
              </figure>
              <div className="info-product">
                <h2 className="display-6">{product.nameProduct}</h2>
                <p className="card-text">{product.description}</p>
                <p className="price">${product.price}</p>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-4"
                  id="boton-prod"
                  onClick={() => onAddProduct(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;