import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CardOrders({ id, status, date, price }) {
  return (
    <NavLink to={ `/customer/orders/${id}` }>
      <div className="cardOrder">
        <div className="cardOrder_number">
          <h2>Pedido</h2>
          <h1 data-testid={ `customer_orders__element-order-id-${id}` }>{id}</h1>
        </div>
        <div className="cardOrder_status">
          <div
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </div>
        </div>
        <div className="cardOrder_date">
          <p data-testid={ `customer_orders__element-order-date-${id}` }>{date}</p>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>{price}</p>
        </div>
      </div>
    </NavLink>
  );
}

CardOrders.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default CardOrders;
