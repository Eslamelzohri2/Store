import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import { clearMessage } from '../features/cart/cartSlice';

function Home() {
  const cartMessage = useSelector(state => state.cart.message);
  const dispatch = useDispatch();


  useEffect(() => {
    if (cartMessage) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [cartMessage, dispatch]);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
    
      {cartMessage && (
        <h1 className='bg-green-100 text-green-800 px-4 py-2 rounded mb-4 shadow'>
          {cartMessage}
        </h1>
      )}

      <SearchBar />
      <Filter />
      <ProductList />
    </div>
  );
}

export default Home;
