import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSeller from '../components/HeaderSeller';
import SellerDetailsTable from '../components/SellerDetailsTable';
import { getOrdersClientDetailsApi } from '../lib/api';

export default function OrderSellerDetails() {
  const { id } = useParams();
  const [orderSellerDetails, setOrderSellerDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getOrdersCLient = async () => {
      const getOrdersC = await getOrdersClientDetailsApi(id);
      console.log(getOrdersC);
      setOrderSellerDetails(getOrdersC);
      setLoading(false);
    };
    getOrdersCLient();
  }, [id]);

  return isLoading ? <div>Loading</div> : (
    <section>
      <HeaderSeller />
      <div className="container orderDetaisContainer">
        <h1>Detalhe do pedido</h1>
        <div>
          <div className="tableHeader">
            <div data-testid="seller_order_details__element-order-details-label-order-id">
              {`PEDIDO ${id}`}
            </div>
            <div
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              {orderSellerDetails.saleDate}
            </div>
            <div
              data-testid={ `seller_order_details__
              element-order-details-label-delivery-status` }
            >
              {orderSellerDetails.status}
            </div>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
            >
              PREPARAR PEDIDO
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
            >
              SAIU PARA ENTREGA
            </button>
          </div>
          <div>
            <SellerDetailsTable products={ orderSellerDetails.products } />
          </div>
          <div>
            <span>Total: R$ </span>
            {orderSellerDetails.products
              .map(({ salesProducts, price }) => price * (salesProducts.quantity))
              .reduce((acc, curl) => acc + curl).toFixed(2)}
          </div>
        </div>
      </div>
    </section>
  );
}
