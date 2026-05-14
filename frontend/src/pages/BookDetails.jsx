import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addItem } from "../redux/cartSlice";
import { addNotification } from "../redux/uiSlice";
import { books } from "../data/dummy";
import BookCoverImage from "../components/BookCoverImage";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaShare,
  FaCheck,
  FaTruck,
  FaUndo,
} from "react-icons/fa";

/**
 * BookDetails Page
 * 
 * FEATURES:
 * - Large book cover display
 * - Full book information
 * - Author details
 * - Rating and reviews
 * - Add to cart functionality
 * - Wishlist button
 * - Share functionality
 * - Related books
 * - Delivery estimates
 * - Return policy
 * 
 * WHY THIS DESIGN?
 * - Comprehensive product view
 * - All information at a glance
 * - Clear call-to-action buttons
 * - Trust signals (delivery, returns)
 */

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find book by ID
  const book = books.find((b) => b.id === parseInt(id));

  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === parseInt(id))
  );

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Book not found
          </h1>
          <button
            onClick={() => navigate("/books")}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Browse all books →
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        category: book.category || "Fiction",
      })
    );
    dispatch(
      addNotification({
        type: "success",
        message: `"${book.title}" added to cart!`,
      })
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-6"
        >
          <FaArrowLeft size={16} />
          <span className="font-medium">Back</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <BookCoverImage
                src={book.image}
                alt={book.title}
                className="relative w-80 max-h-[28rem] object-cover object-center rounded-3xl shadow-2xl aspect-[2/3]"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {book.category && (
                  <span className="px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                    {book.category}
                  </span>
                )}
                {book.discount && (
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    -{book.discount}%
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Book Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Title & Author */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-gray-500">by {book.author}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(book.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                    size={20}
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-gray-800">
                {book.rating?.toFixed(1) || "4.5"}
              </span>
              <span className="text-gray-500">(128 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {book.originalPrice ? (
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-teal-600">
                    ₹{book.price}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{book.originalPrice}
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded-full">
                    Save ₹{book.originalPrice - book.price}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-teal-600">
                  ₹{book.price}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                About this book
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {book.description ||
                  "An captivating literary work that explores the depths of human experience through masterful storytelling and vivid character development. This book has received critical acclaim for its unique perspective and engaging narrative style."}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <FaTruck className="text-teal-500 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-700">
                  Free Delivery
                </span>
                <span className="text-xs text-gray-500">Over ₹500</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <FaCheck className="text-teal-500 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-700">
                  In Stock
                </span>
                <span className="text-xs text-gray-500">Ships today</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl">
                <FaUndo className="text-teal-500 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-700">
                  30-Day Returns
                </span>
                <span className="text-xs text-gray-500">Easy returns</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  isInCart
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:shadow-lg"
                }`}
              >
                {isInCart ? (
                  <>
                    <FaCheck size={18} />
                    In Cart
                  </>
                ) : (
                  <>
                    <FaShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyNow}
                className="flex-1 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Buy Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <FaHeart size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl text-gray-600 hover:text-teal-500 hover:bg-teal-50 transition-colors"
              >
                <FaShare size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;