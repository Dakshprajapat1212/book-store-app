import { createSlice } from '@reduxjs/toolkit';

/**
 * UI Slice - Redux Toolkit State Management
 * 
 * WHY SEPARATE UI STATE?
 * - Keeps UI logic separate from business logic
 * - Easy to manage global UI state (modals, notifications, loading)
 * - Reduces prop drilling for UI components
 * - Better performance with selective re-renders
 * 
 * STATE STRUCTURE:
 * - isCartOpen: Controls CartDrawer visibility
 * - notifications: Array of toast notifications
 * - isLoading: Global loading state
 * - searchQuery: Global search state
 */

const initialState = {
  isCartOpen: false,
  notifications: [],
  isLoading: false,
  searchQuery: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: action.payload.type || 'info',
        message: action.payload.message,
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleCart,
  closeCart,
  openCart,
  addNotification,
  removeNotification,
  setLoading,
  setSearchQuery,
} = uiSlice.actions;
export default uiSlice.reducer;