import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function FormLogin(
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
        <label htmlFor="email_id">
          Endereço de Email
          <input
            data-testid="common_login__input-email"
            type="text"
            onChange={ onChange }
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
            data-testid="common_login__input-password"
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
        className="btn"
        onClick={ onClick }
        data-testid="common_login__button-login"
        type="submit"
        disabled={ disableState }
      >
        Continuar
      </button>
    </form>
  );
}

FormLogin.defaultProps = {
  onClick: PropTypes.func,
  isVisibleFunction: PropTypes.func,
  isVisiblePassword: PropTypes.string,
  onChange: PropTypes.func,
  eyePassword: PropTypes.string,
  disableState: PropTypes.bool,
};

FormLogin.propTypes = {
  onClick: PropTypes.func,
  isVisibleFunction: PropTypes.func,
  isVisiblePassword: PropTypes.string,
  onChange: PropTypes.func,
  eyePassword: PropTypes.string,
  disableState: PropTypes.bool,
};

export default FormLogin;
