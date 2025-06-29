import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    message: null, 
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.product.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ product, quantity: 1 });
      }
      state.message = 'تمت إضافة المنتج إلى السلة';
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.product.id !== id);
      state.message = 'تم حذف المنتج من السلة';
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.product.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        state.message = 'تم تعديل الكمية';
      }
    },
    clearCart(state) {
      state.items = [];
      state.message = 'تم تفريغ السلة';
    },
    clearMessage(state) {
      state.message = null;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, clearMessage } = cartSlice.actions;
export default cartSlice.reducer;
