import React, { useState } from 'react';
import './style.css';
// import Logo from '../img/logo.svg';

function FinalizeOrder() {
  const [itens, setItens] = useState(JSON.parse(localStorage.getItem('shopcart')));
  console.log(itens);

  let count = 0;

  const contValueTotal = () => {
    itens.forEach((a) => { count += (Number(a.price)); });
    return count;
  };

  contValueTotal();
  const removeItem = (i) => {
    setItens(itens.filter((a, ii) => ii !== i));
  };

  const subtotalSeller = (a) => {
    const subtotall = (Number(a.price))
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return subtotall;
  };

  const totalSeller = () => {
    const totalPrice = count.toLocaleString('pt-BR', {
      style: 'currency', currency: 'BRL' });
    localStorage.setItem('sellerPedido', JSON.stringify({
      totalPrice: count.toFixed(2), itens }));
    return totalPrice;
  };

  const valueUnit = (value) => {
    const valorUn = Number(value.price / value.quantity);
    return valorUn.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="FinalizeOrder">
      Finalizar Pedido
      <div className="itens">
        {itens.map((a, i) => (
          <div
            className="item"
            key={ i }
          >
            <th>
              Item
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                { i + 1 }
              </td>
            </th>
            <th className="Describle">
              Descrição
              <td data-testid={ `customer_checkout__element-order-table-name-${i}` }>
                {a.name}
              </td>
            </th>
            <th>
              quantity
              <td data-testid={ `customer_checkout__element-order-table-quantity-${i}` }>
                {a.quantity}
              </td>
            </th>
            <th>
              Valor Unitario
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                {valueUnit(a)}
              </td>
            </th>
            <th>
              Sub-Total
              <td data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }>
                {subtotalSeller(a)}
              </td>
            </th>
            <th>
              Remover Item
              <td data-testid={ `customer_checkout__element-order-table-remove-${i}` }>
                <button onClick={ () => removeItem(i) } type="button">Remover</button>
              </td>
            </th>

          </div>
        ))}
        <h2 data-testid="customer_checkout__element-order-total-price">
          Total: &nbsp;
          {totalSeller()}
        </h2>
      </div>
    </div>
  );
}

export default FinalizeOrder;
