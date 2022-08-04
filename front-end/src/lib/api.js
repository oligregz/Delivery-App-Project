import axios from 'axios';

const API = 'http://localhost:3001';

export const createUsers = async (name, email, password) => {
  let result;

  await axios.post(`${API}/user/register`, {
    name,
    email,
    password,
  })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const loginUsers = async (email, password) => {
  let result;

  await axios.post(`${API}/login`, {
    email,
    password,
  })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getProducts = async () => {
  try {
    const products = await axios.get(`${API}/customer/products`);
    return products;
  } catch (error) {
    return { message: error };
  }
};

export const getOrdersClientApi = async (userId) => {
  let result;
  await axios.get(`${API}/customer/orders/${userId}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getOrdersClientDetailsApi = async (id) => {
  let result;
  await axios.get(`${API}/seller/orders/details/${id}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getOrdersClientApi1 = async (role) => {
  let result;

  await axios.get(`${API}/seller/${role}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });
  return result;
};

export const createSeller = async (sale, products) => {
  let result;
  const authorization = JSON.parse(localStorage.getItem('user')).token;

  await axios.post(`${API}/seller/orders/create`, {
    sale,
    products,
  }, {
    headers: {
      authorization,
    },
  })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getSellerOrdersApi = async (sellerId) => {
  let result;
  await axios.get(`${API}/seller/orders/${sellerId}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};
