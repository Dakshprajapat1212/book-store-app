import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, updateQuantity } from "../redux/cartSlice";
import { addNotification } from "../redux/uiSlice";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart, FaEye, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Premium BookCard Component
 * 
 * FEATURES:
 * - Add to cart with Redux integration
 * - Quick view (eye icon)
 * - Wishlist (heart icon)
 * - Quantity controls for items in cart
 * - Hover animations with Framer Motion
 * - Loading states and feedback
 * - Price formatting
 * - Category badges
 * 
 * WHY THIS DESIGN?
 * - Clear visual hierarchy
 * - Interactive elements are obvious
 * - Immediate feedback on actions
 * - Smooth micro-interactions
 */

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Check if book is in cart
  const cartItem = useSelector((state) => 
    state.cart.items.find(item => item.id === book.id)
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      category: book.category || 'Fiction'
    }));
    
    dispatch(addNotification({
      type: 'success',
      message: `"${book.title}" added to cart!`
    }));
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    dispatch(removeItem(book.id));
    
    dispatch(addNotification({
      type: 'info',
      message: `"${book.title}" removed from cart.`
    }));
  };

  const handleQuantityChange = (e, newQuantity) => {
    e.stopPropagation();
    dispatch(updateQuantity({
      id: book.id,
      quantity: newQuantity
    }));
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    navigate(`/book/${book.id}`);
  };

  // Animation variants
  const cardVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="group relative bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
      variants={cardVariants}
      whileHover="hover"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        {book.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
              {book.category}
            </span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-yellow-500 text-sm font-bold shadow-lg flex items-center gap-1">
          <span>★</span>
          <span>{book.rating?.toFixed(1) || '4.5'}</span>
        </div>

        {/* Quick Action Buttons (Visible on Hover) */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={handleQuickView}
            className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-gray-700 hover:text-teal-600 hover:scale-110 transition-all"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaEye size={16} />
          </motion.button>
          
          <motion.button
            className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-gray-700 hover:text-red-500 hover:scale-110 transition-all"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaHeart size={16} />
          </motion.button>
        </div>

        {/* Discount Badge (if applicable) */}
        {book.discount && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              -{book.discount}%
            </span>
          </div>
        )}
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-teal-600 transition-colors">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">
          by {book.author}
        </p>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-5">
          {/* Price */}
          <div>
            {book.originalPrice ? (
              <>
                <span className="text-sm text-gray-400 line-through mr-2">
                  ₹{book.originalPrice}
                </span>
                <span className="text-2xl font-bold text-teal-600">
                  ₹{book.price}
                </span>
              </>
            ) : (
              <h3 className="text-2xl font-bold text-teal-600">
                ₹{book.price}
              </h3>
            )}
          </div>

          {/* Add to Cart / Quantity Controls */}
          {cartItem ? (
            <div className="flex items-center gap-2 bg-teal-50 rounded-xl p-1">
              <motion.button
                onClick={(e) => handleQuantityChange(e, cartItem.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-teal-600 hover:bg-teal-100 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaMinus size={12} />
              </motion.button>
              
              <span className="w-8 text-center font-bold text-teal-700">
                {cartItem.quantity}
              </span>
              
              <motion.button
                onClick={(e) => handleQuantityChange(e, cartItem.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-teal-600 hover:bg-teal-100 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaPlus size={12} />
              </motion.button>
              
              <motion.button
                onClick={handleRemoveFromCart}
                className="ml-2 w-8 h-8 flex items-center justify-center bg-red-50 rounded-lg text-red-500 hover:bg-red-100 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaShoppingCart size={14} />
              </motion.button>
            </div>
          ) : (
            <motion.button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaShoppingCart size={14} />
              <span>Add</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Memoize for performance
export default memo(BookCard);