import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../features/products/productsSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterCategory = useSelector(state => state.products.filterCategory);

  // ممكن تستخدم categories ثابتة أو تجيبهم من API
  const categories = [
    '',
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <select
      className="border rounded px-3 py-2 mb-4 w-full"
      value={filterCategory}
      onChange={e => dispatch(setFilterCategory(e.target.value))}
    >
      {/* <option value="">كل الفئات</option> */}
      {categories.map(cat => (
        <option key={cat} value={cat}>
          {cat || 'كل الفئات'}
        </option>
      ))}
    </select>
  );
}

export default Filter;
