import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';

function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">السلة</h2>
      {items.length === 0 ? (
        <p>السلة فارغة</p>
      ) : (
        <>
          <ul>
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between items-center mb-4 border-b pb-2">
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={e => dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))}
                    className="border rounded w-20 px-2 py-1"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-4">الإجمالي: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            تفريغ السلة
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
