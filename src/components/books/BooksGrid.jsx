import React from "react";

const BooksGrid = () => {
  return (

    <section className="pb-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div
          className="
            flex
            items-center
            justify-between
            mb-10
          "
        >

          <h2
            className="
              text-4xl
              font-black
              text-[#0f172a]
            "
          >
            Popular Reads
          </h2>

          <p className="text-gray-500">
            120+ Books Available
          </p>

        </div>

        {/* YOUR BOOK CARD GRID HERE */}

      </div>

    </section>
  );
};

export default BooksGrid;