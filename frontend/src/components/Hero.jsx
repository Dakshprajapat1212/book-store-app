import React from "react";
import { Link } from "react-router-dom";
import bookImage from "../photos/book1.png";
import BookCoverImage from "./BookCoverImage";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-400 via-teal-500 to-blue-600 pt-28 pb-14 px-4 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl shadow-teal-900/10 ring-1 ring-white/60 md:p-12 md:rounded-[2.25rem]">
          {/* soft highlight */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-100/60 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-10 md:flex-row md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600/90 md:text-sm">
                BookShell
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                <span className="text-teal-600">Mindful</span>
                <br />
                Reading Experience
              </h1>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-600 md:mx-0">
                Curated knowledge journeys that challenge perceptions and inspire growth.
                Discover transformative content crafted for the modern intellect.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-8 border-t border-gray-100 pt-8 text-gray-800 md:justify-start">
                <div>
                  <p className="text-2xl font-bold tabular-nums">50k+</p>
                  <p className="text-sm text-gray-500">Titles</p>
                </div>
                <div className="hidden h-12 w-px bg-gray-200 sm:block" aria-hidden />
                <div>
                  <p className="text-2xl font-bold tabular-nums">1.2M</p>
                  <p className="text-sm text-gray-500">Readers</p>
                </div>
                <div className="hidden h-12 w-px bg-gray-200 sm:block" aria-hidden />
                <div>
                  <p className="text-2xl font-bold tabular-nums">240+</p>
                  <p className="text-sm text-gray-500">Topics</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  to="/books"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:brightness-105"
                >
                  Browse collection
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition hover:border-teal-200 hover:text-teal-700"
                >
                  Our story
                </Link>
              </div>
            </div>

            <div className="flex flex-1 justify-center md:justify-end">
              <div className="relative">
                <div
                  className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-teal-200/50 to-blue-200/40 blur-2xl"
                  aria-hidden
                />
                <BookCoverImage
                  src={bookImage}
                  alt="Featured book"
                  loading="eager"
                  className="relative mx-auto h-40 w-40 shrink-0 rounded-full object-cover object-center shadow-xl ring-4 ring-white md:h-64 md:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
