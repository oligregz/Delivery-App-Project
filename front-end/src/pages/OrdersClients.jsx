import React, { useEffect, useState } from 'react';
import HeadersPrincipal from '../components/HeadersPrincipal';
import CardOrders from '../components/CardOrders';
import { getOrdersClientApi } from '../lib/api';

export default function OrdersClients() {
  const [orderClient, setOrderClient] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getOrdersCLient = async () => {
    const dataU = JSON.parse(localStorage.getItem('user'));
    const getOrdersC = await getOrdersClientApi(dataU.id);
    console.log(getOrdersC);
    setOrderClient(getOrdersC);
    setLoading(false);
  };
  useEffect(() => {
    getOrdersCLient();
  }, []);
  return (
    <section>
      <HeadersPrincipal />
      <div className="container orderContainer">
        {isLoading ? <div>Loading</div> : orderClient.map((obj) => (
          <CardOrders
            key={ obj.id }
            id={ obj.id }
            status={ obj.status }
            price={ obj.totalPrice }
            date={ obj.saleDate }
          />
        ))}
      </div>
    </section>
  );
}
