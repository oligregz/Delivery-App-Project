import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadersPrincipal from '../components/HeadersPrincipal';
import ComponentTable from '../components/ComponentsTable';
import { getOrdersClientDetailsApi } from '../lib/api';

export default function OrdersDetails() {
  const { id } = useParams();
  const [orderClientDetails, setOrderClientDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getOrdersCLient = async () => {
      const getOrdersC = await getOrdersClientDetailsApi(id);
      console.log(getOrdersC);
      setOrderClientDetails(getOrdersC);
      setLoading(false);
    };
    getOrdersCLient();
  }, [id]);

  return isLoading ? <div>Loading</div> : (
    <section>
      <HeadersPrincipal />
      <div className="container orderDetaisContainer">
        <h1>Detalhe do pedido</h1>
        <div>
          <div className="tableHeader">
            <div>{`PEDIDO ${id}`}</div>
            <div>{`P. Vend: ${orderClientDetails.seller.name}`}</div>
            <div>{orderClientDetails.saleDate}</div>
            <div>{orderClientDetails.status}</div>
            <button type="button">Marcar como Entregue</button>
          </div>
          <div>
            <ComponentTable products={ orderClientDetails.products } />
          </div>
          <div>
            <span>Total: R$ </span>
            {orderClientDetails.products
              .map(({ salesProducts, price }) => price * (salesProducts.quantity))
              .reduce((acc, curl) => acc + curl).toFixed(2)}
          </div>
        </div>
      </div>
    </section>
  );
}
