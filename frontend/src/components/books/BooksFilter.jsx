import React from "react";

const BooksFilter = () => {
  return (

    <section className="px-6 -mt-8 relative z-20">

      <div
        className="
          max-w-6xl
          mx-auto
          bg-white
          rounded-[30px]
          shadow-xl
          p-6
          border
          border-gray-100
        "
      >

        {/* SEARCH */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-5
          "
        >

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search books, authors, genres..."
            className="
              flex-1
              bg-gray-50
              px-6
              py-5
              rounded-2xl
              outline-none
              text-lg
            "
          />

          {/* BUTTON */}
          <button
            className="
              bg-gradient-to-r
              from-teal-500
              to-lime-400
              text-white
              px-10
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Search
          </button>

        </div>

        {/* FILTERS */}
        <div
          className="
            flex
            flex-wrap
            gap-4
            mt-6
          "
        >

          <select className="px-5 py-3 rounded-xl bg-gray-50">
            <option>All Genres</option>
          </select>

          <select className="px-5 py-3 rounded-xl bg-gray-50">
            <option>Popularity</option>
          </select>

          <select className="px-5 py-3 rounded-xl bg-gray-50">
            <option>Newest</option>
          </select>

        </div>

      </div>

    </section>
  );
};

export default BooksFilter;