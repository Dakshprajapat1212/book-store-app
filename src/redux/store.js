import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import uiReducer from './uiSlice';

/**
 * Redux Store Configuration
 * 
 * WHY Redux Toolkit?
 * - Industry standard for React state management
 * - Eliminates boilerplate code
 * - Built-in Immer for immutable updates
 * - Redux DevTools integration for debugging
 * - Middleware support for persistence
 * 
 * STORE STRUCTURE:
 * - cart: Manages shopping cart state
 * - ui: Manages UI state (modals, notifications, loading)
 */

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
  // Enable Redux DevTools for debugging
  devTools: process.env.NODE_ENV !== 'production',
});

// Export types for TypeScript support (optional)
export default store;