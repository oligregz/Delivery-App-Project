import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import ProductsContext from './ProductsContext';
import { getProducts } from '../lib/api';

function ProductsProvider({ children }) {
  const [stateProducts, setProducts] = useState([]);
  const [totalPriceState, setTotalPrice] = useState(0);

  useEffect(() => {
    const requestProducts = async () => {
      const products = await getProducts();
      setProducts(products.data);
    };
    requestProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={ {
        stateProducts,
        setProducts,
        totalPriceState,
        setTotalPrice,
      } }
    >
      { children }
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropType.objectOf(PropType.element).isRequired,
};

export default ProductsProvider;
