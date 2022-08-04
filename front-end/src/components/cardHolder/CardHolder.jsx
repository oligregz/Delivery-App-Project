import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import CardProduct from '../card/CardProduct';
import './style.css';

function CardHolder() {
  const { stateProducts } = useContext(ProductsContext);

  const validateProduct = (shopCart, productId) => {
    const product = shopCart.find((indexProduct) => indexProduct.productId === productId);
    if (product) return product;
    return false;
  };

  const onInputChange = (product) => {
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    const hasProduct = validateProduct(shopCart, product.productId);
    if (hasProduct !== false) {
      const indexProduct = shopCart.findIndex(
        (productCart) => product.productId === productCart.productId,
      );
      shopCart.splice(indexProduct, 1);
    }
    if (product.quantity !== 0) {
      shopCart.push(product);
    }
    localStorage.setItem('shopcart', JSON.stringify(shopCart));
  };

  function renderProducts() {
    return (
      stateProducts.map((product, index) => (
        <CardProduct key={ index } product={ product } onInputChange={ onInputChange } />
      ))
    );
  }

  return (
    <div className="conteiner">
      { renderProducts() }
    </div>
  );
}

export default CardHolder;
