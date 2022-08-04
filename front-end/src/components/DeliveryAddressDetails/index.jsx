import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrdersClientApi1 } from '../../lib/api';
import './style.css';

function DeliveryAddressDetails({ sellerDetails, onChangeDetails }) {
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    getOrdersClientApi1('seller').then((response) => {
      setSeller(response);
    });
  }, []);

  return (
    <div className="DeliveryAddressDetails">
      <form onSubmit={ (e) => e.preventDefault() }>
        <div className="form">
          <label htmlFor="Saller">
            Vendedor Responsavel
            <select
              id="Saller"
              data-testid="customer_checkout__select-seller"
              onChange={ onChangeDetails }
            >
              {seller.map((a, i) => (
                <option
                  key={ i }
                  defaultValue={ a.name }
                  value={ a.id }
                >
                  {a.name}
                </option>))}
            </select>
          </label>
          <label htmlFor="Address">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              onChange={ onChangeDetails }
              id="Address"
            />
          </label>
          <label htmlFor="Number">
            Numero
            <input
              data-testid="customer_checkout__input-addressNumber"
              onChange={ onChangeDetails }
              id="Number"
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
            onClick={ sellerDetails }
          >
            Finalizar pedido
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryAddressDetails;

DeliveryAddressDetails.propTypes = {
  sellerDetails: PropTypes.func.isRequired,
  onChangeDetails: PropTypes.func.isRequired,
};
