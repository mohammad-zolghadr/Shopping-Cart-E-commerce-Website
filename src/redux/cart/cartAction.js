const addProduct = (data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: data,
  };
};

const increaseProduct = (data) => {
  return {
    type: 'INCREASE_PRODUCT',
    payload: data,
  };
};

const decreaseProduct = (data) => {
  return {
    type: 'DECREASE_PRODUCT',
    payload: data,
  };
};

const removeProduct = (data) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: data,
  };
};

const checkout = () => {
  return {
    type: 'CHECKOUT',
  };
};

export { addProduct, increaseProduct, decreaseProduct, removeProduct, checkout };
