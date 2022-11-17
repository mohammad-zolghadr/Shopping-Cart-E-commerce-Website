import React from 'react';

//commponents
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Notfound from './Notfound';

// SPA
import { Route, Routes, Navigate } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<Notfound />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
