import React from "react";
import BookCard from "../cards/BookCard";
import { favoriteBooks } from "../data/favoriteBooks.js";

const FavoriteSection = () => {
  return (

    // ================= COMPLETE SECTION =================
    <section className="bg-gradient-to-r from-teal-300 to-lime-200 py-20 px-6">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-10 shadow-2xl">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          {/* TITLE */}
          <h2 className="text-5xl font-bold text-teal-600">
            Bookseller Favorites
          </h2>

          {/* SMALL LINE */}
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-lime-300 mx-auto mt-4 rounded-full" />

          {/* SUBTITLE */}
          <p className="text-gray-500 mt-5 text-lg">
            Discover the most loved books from our readers
          </p>

        </div>

        {/* ================= BOOK GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >

          {/* LOOP ALL BOOKS */}
          {favoriteBooks.map((book) => (

            <BookCard
              key={book.id}
              book={book}
            />

          ))}

        </div>

        {/* ================= BUTTON ================= */}
        <div className="flex justify-center mt-16">

          <button
            className="
              border-2 border-teal-400
              px-10 py-3
              rounded-full
              text-teal-500
              font-semibold
              hover:bg-teal-400
              hover:text-white
              transition
              duration-300
            "
          >
            View All Books →
          </button>

        </div>

      </div>

    </section>
  );
};

export default FavoriteSection;