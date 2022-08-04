import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import ProductsContext from '../../context/ProductsContext';
import './style.css';

function CardProduct(props) {
  const {
    product: {
      id,
      name,
      price,
      urlImage,
    },
    onInputChange,
  } = props;

  const { totalPriceState, setTotalPrice } = useContext(ProductsContext);

  const [input, setInput] = useState(0);
  const [loaded, setLoad] = useState(false);

  useEffect(() => {
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    if (shopCart) {
      const product = shopCart.find((indexProduct) => indexProduct.productId === id);
      if (product) {
        setInput(product.quantity);
      }
    }
    setLoad(true);
    // Id adicionado no arrar abaixo por sujestão do ESLint
  }, [id]);

  useEffect(() => {
    const productTotalPrice = ((Number(price) * 100) * (input)) / 100;
    const updatePrice = input > 0 ? productTotalPrice.toFixed(2) : Number(price);
    const produtoCarrinho = { productId: id, name, price: updatePrice, quantity: input };
    if (loaded) {
      onInputChange(produtoCarrinho);
    }
  }, [id, input, loaded, name, onInputChange, price]);

  const updateInput = ({ target }) => {
    if (target.value >= 0) {
      setInput(Number(target.value));
    }
    const prevInputPrice = ((Number(price) * 100) * (input)) / 100;
    const newPrice = ((Number(price) * 100) * Number(target.value)) / 100;
    setTotalPrice((totalPriceState + (newPrice - prevInputPrice)).toFixed(2));
  };

  const increment = () => {
    setInput(Number(input) + 1);
    const checkinput = input === 0 ? input + 1 : input;
    const totalPrice = totalPriceState + ((Number(price) * 100) * (checkinput)) / 100;
    setTotalPrice(totalPrice);
  };

  const decrement = () => {
    if (input === 0) {
      setInput(0);
    }
    if (input > 0) {
      setInput(Number(input) - 1);
      const totalPrice = totalPriceState - ((Number(price) * 100) * (input)) / 100;
      setTotalPrice(totalPrice.toFixed(2));
    }
  };

  return (
    <div>
      <div>
        <h3
          className="card-produto"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`${(price).replace('.', ',')}`}
        </h3>
        <img
          className="imagem-produto"
          src={ urlImage }
          alt="imagem do produto"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <p
          className="card-produto"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div className="input-product">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              decrement();
            } }
          >
            -
          </button>
          <input
            className="card-produto"
            type="number"
            value={ input }
            onChange={ updateInput }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            type="button"
            onClick={ () => {
              increment();
            } }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    price: PropType.string.isRequired,
    urlImage: PropType.string.isRequired,
  }).isRequired,
  onInputChange: PropType.func.isRequired,
};

export default CardProduct;
