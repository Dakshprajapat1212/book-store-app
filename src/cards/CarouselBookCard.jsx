import React from "react";

const CarouselBookCard = ({ book }) => {
  return (

    <div
      className="
        min-w-[280px]
        bg-white
        rounded-3xl
        shadow-lg
        overflow-hidden
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-500
        flex-shrink-0
      "
    >

      {/* IMAGE */}
      <div className="relative">

        <img
          src={book.image}
          alt={book.title}
          className="
            w-full
            h-64
            object-cover
          "
        />

        {/* RATING */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-white/90
            px-3
            py-1
            rounded-full
            text-yellow-400
            text-sm
            shadow
          "
        >
          {"★".repeat(book.rating)}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800">
          {book.title}
        </h2>

        <p className="text-gray-500 mt-1">
          by {book.author}
        </p>

        <div className="flex items-center justify-between mt-5">

          <h3 className="text-2xl font-bold text-teal-600">
            ₹{book.price}
          </h3>

          <button
            className="
              bg-gradient-to-r
              from-teal-400
              to-blue-500
              text-white
              px-4
              py-2
              rounded-xl
              hover:scale-105
              transition
            "
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default CarouselBookCard;