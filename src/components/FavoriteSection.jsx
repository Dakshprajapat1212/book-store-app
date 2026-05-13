import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../cards/BookCard";
import { favoriteBooks } from "../data/favoriteBooks.js";

const FavoriteSection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-200/90 via-teal-100/80 to-lime-200/90 py-16 px-4 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/50 bg-white/95 p-6 shadow-2xl shadow-teal-900/5 backdrop-blur-sm md:rounded-[2.5rem] md:p-10 lg:p-12">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold text-teal-700 md:text-4xl lg:text-5xl">
            Bookseller Favorites
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 to-lime-300" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            Discover the most loved books from our readers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-4 lg:gap-10">
          {favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Link
            to="/books"
            className="inline-flex items-center rounded-full border-2 border-teal-500 bg-white px-10 py-3.5 text-sm font-semibold text-teal-600 shadow-sm transition hover:bg-teal-500 hover:text-white"
          >
            View all books →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FavoriteSection;