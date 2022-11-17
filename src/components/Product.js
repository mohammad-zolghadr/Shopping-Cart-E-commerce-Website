import React from 'react';

// SPA
import { Link } from 'react-router-dom';

// css
import style from './Product.module.css';

// icons
import addCart from '../images/add_cart.svg';
import removeCart from '../images/remove_cart.svg';

// helper
import { addOrRemove } from '../helper/usefulFunctions';

// redux
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ data }) => {
  const { id, title, price, image } = data;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cState);

  const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index > -1) {
      return state.selectedItems[index].quantity;
    }
  };

  let tempQC = quantityCount(state, id);
  return (
    <>
      <div className={style.pItemWrapper}>
        <Link className={style.pItemImageWrapper} to={`/products/${id}`}>
          <img src={image} alt="image" />
        </Link>
        <p>{`${title.split(' ')[0]} ${title.split(' ')[1]} ${title.split(' ')[2]}`}</p>
        <div className={style.pItemCta}>
          <span className={style.pPrice}>{price} $</span>
          <div>
            {tempQC > 0 && <span className={style.qCount}>{tempQC}</span>}
            {!tempQC && (
              <button
                className={style.btnAdd}
                onClick={() => addOrRemove(data, tempQC, state, dispatch, true)}
              >
                {<img src={addCart} alt="add" />}
              </button>
            )}
            {tempQC > 0 && (
              <button
                className={style.btnRemove}
                onClick={() => addOrRemove(data, tempQC, state, dispatch, false)}
              >
                {<img src={removeCart} alt="remove" />}
              </button>
            )}
            {tempQC > 0 && (
              <button
                className={style.btnAdd}
                onClick={() => addOrRemove(data, tempQC, state, dispatch, true)}
              >
                {<img src={addCart} alt="add" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
