import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto mb-4" />
      <h3 className="font-semibold mb-2">{product.title}</h3>
      <p className="font-bold text-green-600">${product.price}</p>
      <button
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        onClick={() => dispatch(addToCart(product))}
      >
        أضف للسلة
      </button>
    </div>
  );
}

export default ProductCard;
