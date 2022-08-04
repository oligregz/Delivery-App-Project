import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CardSeller({ id, status, date, price, address }) {
  return (
    <NavLink to={ `/seller/orders/${id}` }>
      <div className="cardOrder">
        <div className="cardOrder_number">
          <h2>Pedido</h2>
          <h1 data-testid={ `seller_orders__element-order-id-${id}` }>{id}</h1>
        </div>
        <div className="cardOrder_status">
          <div
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}
          </div>
        </div>
        <div className="cardOrder_date">
          <p data-testid={ `seller_orders__element-order-date-${id}` }>{date}</p>
          <p data-testid={ `seller_orders__element-card-price-${id}` }>{price}</p>
          <span data-testid={ `seller_orders__element-card-address-${id}` }>
            {address}
          </span>
        </div>
      </div>
    </NavLink>
  );
}

CardSeller.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  address: PropTypes.string,
}.isRequired;

export default CardSeller;
