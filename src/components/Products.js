import React, { useEffect, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../redux/products/productsAction';

// component
import Product from './Product';
import Loading from './loadingComp/Loading';

// css
import style from './Products.module.css';

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pState);

  useEffect(() => {
    getDataFromApi(dispatch);
    document.title = 'Online Shop | Products';
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const searchProduct = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={style.pWrapper}>
      <div className={style.searchInput}>
        <input
          type="text"
          value={searchValue}
          onChange={searchProduct}
          placeholder="Type Something..."
        />
      </div>
      <div className={style.productsContainer}>
        {state.loading && <Loading />}
        {state.errorMessage && <h4>{state.errorMessage}</h4>}
        {state.state &&
          !searchValue &&
          state.state.map((e) => {
            return <Product key={e.id} data={e} />;
          })}
        {
          // Search in "Title" and "Category"
          searchValue &&
            state.state.map((e) => {
              if (
                e.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                e.category.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return <Product key={e.id} data={e} />;
              }
            })
        }
      </div>
    </div>
  );
};

export default Products;
