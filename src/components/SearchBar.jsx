import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/products/productsSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.products.searchTerm);

  return (
    <input
      type="text"
      placeholder="ابحث عن منتج..."
      className="border rounded px-3 py-2 w-full mb-4"
      value={searchTerm}
      onChange={e => dispatch(setSearchTerm(e.target.value))}
    />
  );
}

export default SearchBar;
