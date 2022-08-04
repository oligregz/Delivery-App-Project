import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Header from '../components/HeaderHome';
import { createUsers } from '../lib/api';
import FormRegister from '../components/FormRegister';

function Register() {
  const [isVisiblePassword, setIsVisiblePassword] = useState('password');
  const [eyePassword, setEyePassword] = useState(true);
  const [nameInputState, setNameInputState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [disableState, setDisableState] = useState(true);
  const [passwordState, setPasswordState] = useState('');
  const [errorMensage, setErrorMensage] = useState('');
  const [displayNone, setDisplayNone] = useState('none');

  const navigate = useNavigate();

  const emailColor = (target) => {
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
  };

  const passwordColor = (target) => {
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
  };

  const nameColor = (target) => {
    const MAX_LENGTH_NAME = 12;
    if (target.value.length >= MAX_LENGTH_NAME) {
      target.classList.add('checked');
      target.classList.remove('checkedError');
    } else if (target.value === '') {
      target.classList.remove('checked');
      target.classList.remove('checkedError');
    } else {
      target.classList.add('checkedError');
      target.classList.remove('checked');
    }
  };

  const onChangeClass = (target) => {
    if (target.id === 'email_id') {
      emailColor(target);
    } else if (target.id === 'password_id') {
      passwordColor(target);
    } else if (target.id === 'name_id') {
      nameColor(target);
    } else if (target.id !== '') {
      target.classList.add('checked');
    } else {
      target.classList.remove('checked');
    }
  };

  const onChange = ({ target }) => {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const MAX_LENGTH = 6;
    const MAX_LENGTH_NAME = 12;

    onChangeClass(target);

    if (target.id === 'name_id') {
      setNameInputState(target.value);
      if (
        passwordState.length >= MAX_LENGTH
        && target.value.length >= MAX_LENGTH_NAME && emailState.match(emailRegex)) {
        setDisableState(false);
      } else {
        setDisableState(true);
      }
    } else if (target.id === 'email_id') {
      setEmailState(target.value);
      if (passwordState.length >= MAX_LENGTH
        && nameInputState.length >= MAX_LENGTH_NAME
        && target.value.match(emailRegex)) {
        setDisableState(false);
      } else {
        setDisableState(true);
      }
    } else {
      setPasswordState(target.value);
      if (target.value.length >= MAX_LENGTH
        && nameInputState.length >= MAX_LENGTH_NAME
        && emailState.match(emailRegex)) {
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
    const request = await createUsers(nameInputState, emailState, passwordState);

    if (typeof request === 'string' && request !== 'Created') {
      setErrorMensage(request);
      setDisplayNone('flex');
      return navigate('/register');
    }
    setDisplayNone('none');
    const { token, user } = request;
    console.log(user);
    localStorage.setItem('user', JSON.stringify({ token, ...user }));
    return navigate('/customer/products');
  };

  return (
    <section>
      <Header />
      <div className="container_login_register section_register">
        <div className="register_text">
          <h1>Registrar</h1>
          <p>Seja bem vindo. Preencha as credenciais para criar sua conta.</p>
        </div>
        <div
          data-testid="common_register__element-invalid_register"
          className="ms_gerror"
          style={ { display: displayNone } }
        >
          <span>{errorMensage}</span>
        </div>
        <FormRegister
          onClick={ onClick }
          isVisibleFunction={ isVisibleFunction }
          isVisiblePassword={ isVisiblePassword }
          onChange={ onChange }
          eyePassword={ eyePassword }
          disableState={ disableState }
        />
        <div className="resgister_link">
          Ja tem uma conta?
          {' '}
          <NavLink to="/">
            <button type="button">Login agora</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Register;
