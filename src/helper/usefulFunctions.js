// redux
import {
  addProduct,
  increaseProduct,
  decreaseProduct,
  removeProduct,
} from '../redux/cart/cartAction';

const addOrRemove = (data, quantity, state, dispatch, add) => {
  if (add) {
    //  ADD IN CART (this item dosnt exist before)
    if (!state.selectedItems.find((e) => e.id === data.id)) dispatch(addProduct(data));
    //  INCREASE PRODUCT (this item is existed before and we want to increase quantity)
    else dispatch(increaseProduct(data));
  } else {
    // DECREASE FROM CART
    if (quantity > 1) dispatch(decreaseProduct(data));
    // REMOVE FROM CART
    else dispatch(removeProduct(data));
  }
};

export { addOrRemove };
