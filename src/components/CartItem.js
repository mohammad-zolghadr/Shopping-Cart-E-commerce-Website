import React from 'react';

// SPA
import { Link } from 'react-router-dom';

// css
import style from './CartItem.module.css';

// redux
import { useSelector, useDispatch } from 'react-redux';

// helper
import { addOrRemove } from '../helper/usefulFunctions';

// icons
import addCart from '../images/add_cart.svg';
import removeCart from '../images/remove_cart.svg';

const CartItem = ({ data }) => {
  const { id, image, title, quantity, price } = data;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cState);

  return (
    <div className={style.ciContainer}>
      <img src={image} alt="Product" />
      <div className={style.ciInfo}>
        <Link to={`/products/${id}`}>
          <p>{title}</p>
        </Link>
        <p></p>
        <span>
          {quantity} item : {quantity * price} $
        </span>
      </div>
      <div className={style.cItemCta}>
        {quantity > 0 && (
          <button
            className={style.btnRemove}
            onClick={() => addOrRemove(data, quantity, state, dispatch, false)}
          >
            {<img src={removeCart} alt="remove" />}
          </button>
        )}
        {quantity > 0 && (
          <button
            className={style.btnAdd}
            onClick={() => addOrRemove(data, quantity, state, dispatch, true)}
          >
            {<img src={addCart} alt="add" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
