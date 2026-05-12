import { createSlice } from '@reduxjs/toolkit';

/**
 * Cart Slice - Redux Toolkit State Management
 * 
 * WHY THIS APPROACH?
 * - createSlice auto-generates action creators and action types
 * - Built-in Immer support for immutable state updates
 * - Follows Redux Toolkit best practices
 * - Easy to test and debug
 * 
 * STATE STRUCTURE:
 * - items: Array of cart items with product details
 * - itemCount: Total number of items in cart
 * - totalPrice: Sum of all item prices (for quick access)
 */

const loadCartFromStorage = () => {
  try {
    const serializedState = localStorage.getItem('bookstore-cart');
    if (serializedState === null) {
      return {
        items: [],
        itemCount: 0,
        totalPrice: 0,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart from storage:', err);
    return {
      items: [],
      itemCount: 0,
      totalPrice: 0,
    };
  }
};

const saveCartToStorage = (cart) => {
  try {
    const serializedState = JSON.stringify(cart);
    localStorage.setItem('bookstore-cart', serializedState);
  } catch (err) {
    console.error('Error saving cart to storage:', err);
  }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, title, author, price, image, category } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          title,
          author,
          price,
          image,
          category,
          quantity: 1,
        });
      }

      state.itemCount += 1;
      state.totalPrice += price;
      saveCartToStorage(state);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        state.itemCount -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== id);
        saveCartToStorage(state);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        const quantityDiff = quantity - item.quantity;
        item.quantity = quantity;
        state.itemCount += quantityDiff;
        state.totalPrice += quantityDiff * item.price;

        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }

        saveCartToStorage(state);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
      state.totalPrice = 0;
      saveCartToStorage(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;