import React, { useEffect } from 'react';

// SPA
import { Link } from 'react-router-dom';

// css
import style from './Cart.module.css';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { checkout } from '../redux/cart/cartAction';

// component
import CartItem from './CartItem';

// image
import emptyImage from '../images/cart_man.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cState);

  useEffect(() => {
    document.title = 'Online Shop | Cart';
  }, []);
  return (
    <div className={style.cCointainer}>
      {state.selectedItems.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
      <div className={style.checkout}>
        {state.total > 0 ? (
          <>
            <p>Total Price : {state.total} $</p>
            <button onClick={() => dispatch(checkout())}>Checkout</button>
          </>
        ) : (
          <>
            <img
              className={style.emptyCartVector}
              src={emptyImage}
              alt="Empty Cart Vector"
            />
            <p className={style.pcDesc}>No Product Selected Yet!</p>
            <Link to="/products">Show All Products</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
