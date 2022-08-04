import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSeller } from '../../lib/api';
import Header from '../../components/Header';
import FinalizeOrder from '../../components/FinalizeOrder';
import DeliveryAddressDetails from '../../components/DeliveryAddressDetails';

function Checkout() {
  const navigate = useNavigate();
  const [saller, Saller] = useState('');
  const [address, Address] = useState('');
  const [number, Numberr] = useState('');
  const onChangeDetails = ({ target: { value, id } }) => {
    if (id === 'Number') { Numberr(value); }
    if (id === 'Address') { Address(value); }
    if (id === 'Saller') { Saller(value); }
  };

  const sellerDetails = async () => {
    const seller = JSON.parse(localStorage.getItem('sellerPedido'));
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const sale = {
      userId,
      sellerId: Number(saller),
      totalPrice: Number(seller.totalPrice),
      deliveryAddress: address,
      deliveryNumber: number };
    const products = seller.itens.map((a) => (
      { productId: a.productId, quantity: a.quantity }));
    const sellerCre = await createSeller(sale, products);
    console.log(sellerCre.id);
    return navigate(`/customer/orders/${sellerCre.id}`);
  };

  return (
    <section>
      <Header />
      <FinalizeOrder />
      <DeliveryAddressDetails
        onChangeDetails={ onChangeDetails }
        sellerDetails={ sellerDetails }
      />
    </section>
  );
}

export default Checkout;
