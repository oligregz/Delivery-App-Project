import React from 'react';
import PropTypes from 'prop-types';

function SellerDetailsTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="item">Item</th>
          <th className="description">Descrição</th>
          <th className="quantity">Quantidade</th>
          <th className="unitValue">Valor Unitário</th>
          <th className="subTotal">Sub-Total</th>
        </tr>
      </thead>
      {products.map(({ name, salesProducts, price }, index) => (
        <tbody key={ index }>
          <tr>
            <td
              data-testid={ `seller_order_details__element-order-table-item-number-
              ${index + 1}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `seller_order_details__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `seller_order_details__element-order-table-quantity-
              ${index + 1}` }
            >
              {salesProducts.quantity}
            </td>
            <td
              data-testid={ `seller_order_details__element-order-table-unit-price-
              ${index + 1}` }
            >
              {price}
            </td>
            <td
              data-testid={ `seller_order_details__element-order-table-sub-total-
              ${index + 1}` }
            >
              {price * salesProducts.quantity}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

SellerDetailsTable.propTypes = {
  products: PropTypes.any,
}.isRequired;

export default SellerDetailsTable;
