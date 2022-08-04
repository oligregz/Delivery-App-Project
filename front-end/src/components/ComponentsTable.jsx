import React from 'react';
import PropTypes from 'prop-types';

function ComponentTable({ products }) {
  console.log(products);
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="task-id">Item</th>
          <th className="task">Descrição</th>
          <th className="date">Quantidade</th>
          <th className="status">Valor Unitário</th>
          <th className="update">Sub-Total</th>
        </tr>
      </thead>
      {products.map(({ id, name, salesProducts, price }) => (
        <tbody key={ id }>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{salesProducts.quantity}</td>
            <td>{price}</td>
            <td>{price * salesProducts.quantity}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

ComponentTable.propTypes = {
  products: PropTypes.any,
}.isRequired;

export default ComponentTable;
