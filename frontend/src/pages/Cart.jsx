import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { updateQuantity, removeItem, clearCart } from "../redux/cartSlice";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaArrowLeft,
  FaArrowRight,
  FaTag,
} from "react-icons/fa";

/**
 * Cart Page - Full Page Cart View
 * 
 * FEATURES:
 * - Complete order summary
 * - Quantity controls
 * - Coupon/discount code input
 * - Shipping calculator
 * - Multiple payment options
 * - Empty cart state
 * - Continue shopping link
 * 
 * WHY THIS DESIGN?
 * - Full page allows for more details
 * - Clear breakdown of costs
 * - Professional checkout flow
 * - Trust signals (secure checkout)
 */

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, itemCount, totalPrice } = useSelector((state) => state.cart);
  const [couponCode, setCouponCode] = React.useState("");
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const [discountAmount, setDiscountAmount] = React.useState(0);

  // Calculate totals
  const shipping = totalPrice > 500 ? 0 : 40;
  const tax = Math.round(totalPrice * 0.05); // 5% GST
  const discount = discountApplied ? discountAmount : 0;
  const grandTotal = totalPrice + shipping + tax - discount;

  const handleApplyCoupon = () => {
    // Demo coupon codes
    const coupons = {
      SAVE10: 0.1,
      SAVE20: 0.2,
      BOOK50: 0.5,
    };

    const code = couponCode.toUpperCase();
    if (coupons[code]) {
      setDiscountAmount(Math.round(totalPrice * coupons[code]));
      setDiscountApplied(true);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-8">
              <FaShoppingBag className="text-teal-500" size={64} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-500 mb-8 max-w-md">
              Looks like you haven't added any books yet. Explore our collection
              and find your next great read!
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/books")}
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
              >
                Browse Books
                <FaArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-4"
          >
            <FaArrowLeft size={16} />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">{itemCount} items in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-32 object-cover rounded-lg shadow-sm"
                    />

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-bold text-gray-800 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        by {item.author}
                      </p>
                      <p className="text-xs text-gray-400 mb-auto">
                        Category: {item.category}
                      </p>

                      {/* Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-teal-600 transition-colors"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="w-10 text-center font-bold text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-teal-600 transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-teal-600">
                            ₹{item.price * item.quantity}
                          </p>
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 mt-1"
                          >
                            <FaTrash size={12} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clear Cart */}
              <button
                onClick={() => dispatch(clearCart())}
                className="mt-6 w-full py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors"
              >
                Clear Entire Cart
              </button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-6 sticky top-28"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* Coupon Input */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Have a coupon code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={discountApplied}
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors disabled:opacity-50"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-green-500 text-sm mt-2">
                    ✓ Coupon applied! You saved ₹{discountAmount}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (5% GST)</span>
                  <span>₹{tax}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-teal-600">₹{grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Proceed to Checkout
                <FaArrowRight size={18} />
              </button>

              {/* Trust Signals */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  🔒 Secure checkout • Free shipping over ₹500
                </p>
              </div>

              {/* Continue Shopping */}
              <button
                onClick={() => navigate("/books")}
                className="w-full text-teal-600 font-medium py-3 mt-4 hover:bg-teal-50 rounded-xl transition-colors"
              >
                Continue Shopping
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;