import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { closeCart, toggleCart } from "../redux/uiSlice";
import { updateQuantity, removeItem, clearCart } from "../redux/cartSlice";
import { FaTimes, FaTrash, FaMinus, FaPlus, FaShoppingBag, FaArrowRight } from "react-icons/fa";

/**
 * CartDrawer Component
 * 
 * FEATURES:
 * - Slide-in panel from right side
 * - Real-time cart updates from Redux
 * - Quantity controls
 * - Remove items
 * - Clear cart option
 * - Order summary with totals
 * - Checkout button
 * - Empty cart state
 * - Overlay backdrop
 * 
 * WHY THIS DESIGN?
 * - Non-intrusive (doesn't navigate away)
 * - Quick access to cart from anywhere
 * - Clear visual feedback
 * - Easy to modify quantities
 */

const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { items, itemCount, totalPrice } = useSelector((state) => state.cart);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);

  const shipping = totalPrice > 500 ? 0 : 40;
  const tax = Math.round(totalPrice * 0.05); // 5% GST
  const grandTotal = totalPrice + shipping + tax;

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate("/cart");
  };

  const handleContinueShopping = () => {
    dispatch(closeCart());
    navigate("/books");
  };

  // Animation variants
  const overlayVariants = {
    open: { opacity: 0.5, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.2 } }
  };

  const drawerVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => dispatch(closeCart())}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <FaShoppingBag className="text-teal-600" size={24} />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                  <p className="text-sm text-gray-500">{itemCount} items</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="w-10 h-10 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                /* Empty Cart State */
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                    <FaShoppingBag className="text-teal-400" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-xs">
                    Looks like you haven't added any books yet. Start exploring our collection!
                  </p>
                  <button
                    onClick={handleContinueShopping}
                    className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Browse Books
                    <FaArrowRight size={16} />
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex gap-4 p-4 bg-gray-50 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                    >
                      {/* Item Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-28 object-cover rounded-lg shadow-sm"
                      />

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-bold text-gray-800 line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">
                          by {item.author}
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
                            <button
                              onClick={() => dispatch(updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1
                              }))}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-teal-600 transition-colors"
                            >
                              <FaMinus size={10} />
                            </button>
                            <span className="w-8 text-center font-bold text-sm text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1
                              }))}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-teal-600 transition-colors"
                            >
                              <FaPlus size={10} />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="font-bold text-teal-600">
                            ₹{item.price * item.quantity}
                          </span>

                          {/* Remove Button */}
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart */}
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="text-sm text-red-500 hover:text-red-600 font-medium text-center py-2"
                  >
                    Clear entire cart
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Order Summary */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                {/* Order Summary */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-teal-600">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <FaArrowRight size={18} />
                </button>

                {/* Continue Shopping */}
                <button
                  onClick={() => dispatch(closeCart())}
                  className="w-full text-teal-600 font-medium py-3 mt-2 hover:bg-teal-50 rounded-xl transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
