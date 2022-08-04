import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HeaderHome from '../components/HeaderHome';
import { loginUsers } from '../lib/api';
import FormLogin from '../components/FormLogin';

function Login() {
  const [isVisiblePassword, setIsVisiblePassword] = useState('password');
  const [eyePassword, setEyePassword] = useState(true);
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [disableState, setDisableState] = useState(true);
  const [errorMensage, setErrorMensage] = useState('');
  const [displayNone, setDisplayNone] = useState('none');

  const navigate = useNavigate();

  const onChangeClass = (target) => {
    if (target.id === 'email_id') {
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (target.value.match(emailRegex)) {
        target.classList.add('checked');
        target.classList.remove('checkedError');
      } else if (target.value === '') {
        target.classList.remove('checked');
        target.classList.remove('checkedError');
      } else {
        target.classList.add('checkedError');
        target.classList.remove('checked');
      }
    } else if (target.id === 'password_id') {
      const MAX_LENGTH = 6;
      if (target.value.length >= MAX_LENGTH) {
        target.classList.add('checked');
        target.classList.remove('checkedError');
      } else if (target.value === '') {
        target.classList.remove('checked');
        target.classList.remove('checkedError');
      } else {
        target.classList.add('checkedError');
        target.classList.remove('checked');
      }
    } else if (target.value !== '') {
      target.classList.add('checked');
    } else {
      target.classList.remove('checked');
    }
  };

  const onChange = ({ target }) => {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    onChangeClass(target);
    if (target.id === 'email_id') {
      setEmailState(target.value);
      // baseia o que ja esta no stado com o que acabei de digitar
      const MAX_LENGTH = 6;
      if (passwordState.length >= MAX_LENGTH && target.value.match(emailRegex)) {
        setDisableState(false);
      } else {
        setDisableState(true);
      }
    } else {
      setPasswordState(target.value);
      const MAX_LENGTH = 6;
      if (target.value.length >= MAX_LENGTH && emailState.match(emailRegex)) {
        setDisableState(false);
      } else {
        setDisableState(true);
      }
    }
  };

  const isVisibleFunction = () => {
    if (isVisiblePassword === 'password') {
      setIsVisiblePassword('text');
      setEyePassword(false);
    } else {
      setIsVisiblePassword('password');
      setEyePassword(true);
    }
  };

  const onClick = async () => {
    const request = await loginUsers(emailState, passwordState);

    if (typeof request === 'string') {
      setErrorMensage(request);
      setDisplayNone('flex');
      return navigate('/login');
    }
    setDisplayNone('none');
    const { token, user } = request;
    localStorage.setItem('user', JSON.stringify({ token, ...user }));
    if (user.role === 'seller') {
      return navigate('/seller/orders');
    }
    return navigate('/customer/products');
  };

  return (
    <section>
      <HeaderHome />
      <div
        className="container_login_register section_login"
      >
        <div className="login_text">
          <h1>Login</h1>
          <p>
            Bem vindo de volta. Coloque suas credenciais para acessar sua conta.
          </p>
        </div>
        <div
          className="ms_gerror"
          data-testid="common_login__element-invalid-email"
          style={ { display: displayNone } }
        >
          <span>{errorMensage}</span>
        </div>
        <FormLogin
          onClick={ onClick }
          isVisibleFunction={ isVisibleFunction }
          isVisiblePassword={ isVisiblePassword }
          onChange={ onChange }
          eyePassword={ eyePassword }
          disableState={ disableState }
        />
        <div className="login_link">
          Ainda não tem uma conta?
          {' '}
          <NavLink to="/register">
            <button
              type="button"
              data-testid="common_login__button-register"
            >
              Cadastrar agora
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
