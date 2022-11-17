import React, { useEffect, useState } from 'react';

// css
import style from './ProductDetail.module.css';

// component
import Loading from './loadingComp/Loading';

// icons
import addCart from '../images/add_cart.svg';
import removeCart from '../images/remove_cart.svg';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDataFromApi } from '../redux/products/productsAction';

// helper
import { addOrRemove } from '../helper/usefulFunctions';

const ProductDetail = () => {
  const [isReload, setIsReload] = useState(false);
  const [qtyTemp, setQtyTemp] = useState(0);
  const pathId = +useLocation().pathname.split('/')[2];

  const dispatch = useDispatch();
  const state = useSelector((state) => state.pState);

  const cDispatch = useDispatch();
  const cState = useSelector((state) => state.cState);

  let item;

  useEffect(() => {
    if (item) {
      document.title = `Online Shop | ${item.title}`;
    } else {
      setIsReload(true);
      getDataFromApi(dispatch, pathId);
    }
  }, []);

  const loadUi = () => {
    isReload ? (item = state.state) : (item = state.state.find((e) => e.id === pathId));

    const setQuantity = (id) => {
      {
        let tempItem = item;
        if (
          cState.selectedItems.length > 0 &&
          cState.selectedItems.find((e) => e.id == id)
        ) {
          tempItem = cState.selectedItems.find((e) => e.id == id);
        } else {
          tempItem = { ...tempItem, quantity: 0 };
        }
        tempItem.quantity && setQtyTemp(tempItem.quantity);
      }
    };

    return (
      <>
        {qtyTemp === 0 && setQuantity(item.id)}
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className={style.pDetailCta}>
          <span>{item.price} $</span>
          <div>
            <span className={style.qtyTemp}>{qtyTemp} of this item</span>
            {!qtyTemp && (
              <button
                className={style.btnAdd}
                onClick={() => {
                  addOrRemove(item, qtyTemp, cState, cDispatch, true);
                  setQtyTemp((prevQtyTemp) => prevQtyTemp + 1);
                }}
              >
                {<img src={addCart} alt="add" />}
              </button>
            )}
            {qtyTemp > 0 && (
              <button
                className={style.btnRemove}
                onClick={() => {
                  addOrRemove(item, qtyTemp, cState, cDispatch, false);
                  setQtyTemp((prevQtyTemp) => prevQtyTemp + -1);
                }}
              >
                {<img src={removeCart} alt="remove" />}
              </button>
            )}
            {qtyTemp > 0 && (
              <button
                className={style.btnAdd}
                onClick={() => {
                  addOrRemove(item, qtyTemp, cState, cDispatch, true);
                  setQtyTemp((prevQtyTemp) => prevQtyTemp + 1);
                }}
              >
                {<img src={addCart} alt="add" />}
              </button>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={style.pDetailContainer}>
      {state.loading && <Loading />}
      {state.errorMessage && <h4>{state.errorMessage}</h4>}
      {state.state && loadUi()}
    </div>
  );
};

export default ProductDetail;
