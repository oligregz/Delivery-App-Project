import React, { useEffect, useState } from 'react';
import HeaderSeller from '../components/HeaderSeller';
import { getSellerOrdersApi } from '../lib/api';
import CardSeller from '../components/CardSeller';

export default function OrderSellers() {
  const [orderSeller, setOrderSeller] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getOrdersCLient = async () => {
    const dataU = JSON.parse(localStorage.getItem('user'));
    const getSellerOrders = await getSellerOrdersApi(dataU.id);
    console.log(getSellerOrders);
    setOrderSeller(getSellerOrders);
    setLoading(false);
  };
  useEffect(() => {
    getOrdersCLient();
  }, []);
  return (
    <section>
      <HeaderSeller />
      <div className="container orderContainer">
        {isLoading ? <div>Loading</div> : orderSeller.map((obj) => (
          <CardSeller
            key={ obj.id }
            id={ obj.id }
            status={ obj.status }
            price={ obj.totalPrice }
            date={ obj.saleDate }
            address={ `${obj.deliveryAddress}, ${obj.deliveryNumber}` }
          />
        ))}
      </div>
    </section>
  );
}
