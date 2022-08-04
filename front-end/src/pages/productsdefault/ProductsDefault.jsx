import React, { useEffect } from 'react';
import ProductsProvider from '../../context/ProductsProvide';
import CardHolder from '../../components/cardHolder/CardHolder';
import NavBar from '../../components/navbarproducts/NavBarProducts';
import ShopcartCard from '../../components/ShopcartCard/ShopcartCard';

function ProductsDefault() {
  useEffect(() => {
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    const emptyArray = [];
    if (!shopCart) {
      localStorage.setItem('shopcart', JSON.stringify(emptyArray));
    }
  }, []);
  return (
    <ProductsProvider>
      <div className="body">
        <NavBar />
        <div>
          <CardHolder />
        </div>
        <ShopcartCard />
      </div>
    </ProductsProvider>
  );
}

export default ProductsDefault;
