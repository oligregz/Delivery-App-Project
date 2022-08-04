import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function FormRegister(
  {
    onClick,
    isVisibleFunction,
    isVisiblePassword,
    onChange,
    eyePassword,
    disableState,
  },
) {
  return (
    <form action="#" onSubmit={ (e) => e.preventDefault() }>
      <div className="input">
        <label htmlFor="name_id">
          Nome
          <input
            type="text"
            onChange={ onChange }
            data-testid="common_register__input-name"
            placeholder="Coloque seu nome"
            id="name_id"
          />
        </label>
      </div>
      <div className="input email">
        <label htmlFor="email_id">
          Endereço de Email
          <input
            type="text"
            onChange={ onChange }
            data-testid="common_register__input-email"
            placeholder="Coloque seu Email"
            id="email_id"
          />
        </label>
      </div>
      <div className="input password">
        <label htmlFor="password_id">
          Senha
          <input
            type={ isVisiblePassword }
            onChange={ onChange }
            data-testid="common_register__input-password"
            placeholder="Coloque sua Senha"
            id="password_id"
          />
        </label>
        <FontAwesomeIcon
          className="eyePassword"
          onClick={ isVisibleFunction }
          icon={ eyePassword ? faEye : faEyeSlash }
        />
      </div>
      <button
        data-testid="common_register__button-register"
        className="btn"
        onClick={ onClick }
        disabled={ disableState }
        type="submit"
      >
        Continuar
      </button>
    </form>
  );
}

FormRegister.defaultProps = {
  onClick: PropTypes.func,
  isVisibleFunction: PropTypes.func,
  isVisiblePassword: PropTypes.string,
  onChange: PropTypes.func,
  eyePassword: PropTypes.bool,
  disableState: PropTypes.bool,
};

FormRegister.propTypes = {
  onClick: PropTypes.func,
  isVisibleFunction: PropTypes.func,
  isVisiblePassword: PropTypes.string,
  onChange: PropTypes.func,
  eyePassword: PropTypes.bool,
  disableState: PropTypes.bool,
};

export default FormRegister;
