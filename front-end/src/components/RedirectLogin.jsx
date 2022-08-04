import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectLogin() {
  const navigate = useNavigate();

  useEffect(() => navigate('/login'), [navigate]);

  return <h1 className="redirect_page">Redirecionando</h1>;
}

export default RedirectLogin;
