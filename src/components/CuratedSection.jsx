import React, { useRef } from "react";
import CarouselBookCard from "../cards/CarouselBookCard";
import { books } from "../data/dummy";

const CuratedSection = () => {

  // 🔥 useRef → scroll container k pakadne ke liye
  const scrollRef = useRef();

  // ⬅️ LEFT SCROLL FUNCTION
  const scrollLeft = () => {

    // current → actual div
    // scrollBy → div ko scroll karo
    // left: -300 → left side move
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  // ➡️ RIGHT SCROLL FUNCTION
  const scrollRight = () => {

    // left: 300 → right side move
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (

    // 🔥 COMPLETE SECTION
    <section className="bg-gray-100 py-12 px-6">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">

        {/* LEFT SIDE */}
        <div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-gray-800">
            Curated{" "}
            <span className="text-teal-600">
              Excellence
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-500 mt-2">
            Discover handpicked books loved by readers
          </p>

        </div>

        {/* RIGHT SIDE → ARROWS */}
        <div className="flex gap-3">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="bg-white shadow-md rounded-full w-10 h-10 hover:scale-110 transition"
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="bg-white shadow-md rounded-full w-10 h-10 hover:scale-110 transition"
          >
            →
          </button>

        </div>
      </div>

      {/* ================= SCROLL CONTAINER ================= */}

      <div

        // 🔥 ref connect
        ref={scrollRef}

        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          max-w-7xl
          mx-auto
        "
      >

        {/* 🔥 map loop */}
        {books.map((book) => (

          // Har book ke liye ek card
          <CarouselBookCard
            key={book.id}
            book={book}
          />

        ))}

      </div>
    </section>
  );
};

export default CuratedSection;