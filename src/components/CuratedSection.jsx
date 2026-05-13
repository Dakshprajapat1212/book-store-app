import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselBookCard from "../cards/CarouselBookCard";
import { books } from "../data/dummy";

const CuratedSection = () => {
  const scrollRef = useRef(null);

  const scroll = (delta) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="border-y border-gray-200/80 bg-gradient-to-b from-gray-100 to-slate-100/90 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Curated{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Handpicked titles from our catalog—scroll or use arrows to explore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/books"
              className="text-sm font-semibold text-teal-600 transition hover:text-teal-700"
            >
              View all books →
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Scroll curated list left"
                onClick={() => scroll(-320)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 hover:shadow-md"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll curated list right"
                onClick={() => scroll(320)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 hover:shadow-md"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-slate-100 to-transparent md:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-slate-100 to-transparent md:w-12"
          aria-hidden
        />

        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 md:mx-auto md:max-w-7xl"
        >
          {books.map((book) => (
            <div key={book.id} className="snap-start">
              <CarouselBookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
