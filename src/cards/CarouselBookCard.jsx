import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import { addItem, removeItem, updateQuantity } from "../redux/cartSlice";
import { addNotification } from "../redux/uiSlice";
import BookCoverImage from "../components/BookCoverImage";

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const cardVariants = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const CarouselBookCard = ({ book }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === book.id)
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
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

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeItem(book.id));
    dispatch(
      addNotification({
        type: "info",
        message: `"${book.title}" removed from cart.`,
      })
    );
  };

  const handleQuantityChange = (e, newQuantity) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      updateQuantity({
        id: book.id,
        quantity: newQuantity,
      })
    );
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group flex min-w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-3xl border border-gray-100/80 bg-white shadow-lg hover:shadow-2xl"
    >
      <Link
        to={`/books/${book.id}`}
        className="block min-h-0 flex-1 rounded-t-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500/70"
      >
        <div className="relative overflow-hidden rounded-t-3xl">
          <BookCoverImage
            src={book.image}
            alt={book.title}
            className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-sm text-amber-500 shadow-sm backdrop-blur-sm">
            {"★".repeat(book.rating)}
          </div>
        </div>

        <div className="px-5 pt-5">
          <h2 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600">
            {book.title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">by {book.author}</p>
        </div>
      </Link>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 p-5 pt-4">
        <div className="min-w-0 shrink">
          <p className="text-2xl font-bold text-teal-600">₹{book.price}</p>
        </div>

        {cartItem ? (
          <div className="flex items-center gap-1.5 rounded-xl bg-teal-50 p-1 sm:gap-2">
            <motion.button
              type="button"
              onClick={(e) => handleQuantityChange(e, cartItem.quantity - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-teal-600 transition-colors hover:bg-teal-100"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaMinus size={12} />
            </motion.button>

            <span className="min-w-[2rem] text-center text-sm font-bold text-teal-700">
              {cartItem.quantity}
            </span>

            <motion.button
              type="button"
              onClick={(e) => handleQuantityChange(e, cartItem.quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-teal-600 transition-colors hover:bg-teal-100"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaPlus size={12} />
            </motion.button>

            <motion.button
              type="button"
              onClick={handleRemoveFromCart}
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaShoppingCart size={14} />
            </motion.button>
          </div>
        ) : (
          <motion.button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaShoppingCart size={14} />
            <span>Add</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default memo(CarouselBookCard);
