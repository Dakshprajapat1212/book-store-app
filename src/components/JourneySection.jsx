import React from "react";
import { Link } from "react-router-dom";
import BookCoverImage from "./BookCoverImage";

const JourneySection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50/60 py-20 px-4 sm:px-6 md:py-24">

      {/* ================= CONTAINER ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
        "
      >

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative group">

          {/* IMAGE */}
          <BookCoverImage
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
            alt="Library interior with shelves of books"
            className="h-[min(420px,55vh)] w-full rounded-3xl border border-teal-100 object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]"
          />

          {/* ================= GLOW EFFECT ================= */}
          <div
            className="
              absolute
              -bottom-6
              -right-6
              w-40
              h-40
              bg-teal-300/30
              blur-3xl
              rounded-full
              -z-10
            "
          />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>

          {/* SMALL TAG */}
          <span
            className="
              bg-teal-100
              text-teal-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            OUR STORY
          </span>

          {/* ================= TITLE ================= */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
            Our Literary{" "}
            <span className="text-teal-600">
              Journey
            </span>
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              text-gray-600
              text-lg
              leading-8
              mt-6
            "
          >
            Founded with a passion for literature, BookShell has evolved
            into a sanctuary for book lovers. We curate exceptional
            reading experiences, connecting readers with stories that
            inspire, educate, and transport them into new worlds.
          </p>

          {/* ================= STATS ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6
              mt-10
            "
          >

            {/* ================= CARD 1 ================= */}
            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-2xl
                p-6
                shadow-lg
                border
                border-white
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              {/* ICON */}
              <div className="text-4xl mb-3">
                📚
              </div>

              {/* NUMBER */}
              <h3 className="text-3xl font-bold text-gray-800">
                10K+
              </h3>

              {/* TEXT */}
              <p className="text-gray-500 mt-2">
                Books Collection
              </p>

            </div>

            {/* ================= CARD 2 ================= */}
            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-2xl
                p-6
                shadow-lg
                border
                border-white
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              {/* ICON */}
              <div className="text-4xl mb-3">
                👥
              </div>

              {/* NUMBER */}
              <h3 className="text-3xl font-bold text-gray-800">
                50K+
              </h3>

              {/* TEXT */}
              <p className="text-gray-500 mt-2">
                Happy Readers
              </p>

            </div>

            {/* ================= CARD 3 ================= */}
            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-2xl
                p-6
                shadow-lg
                border
                border-white
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              {/* ICON */}
              <div className="text-4xl mb-3">
                🏆
              </div>

              {/* NUMBER */}
              <h3 className="text-3xl font-bold text-gray-800">
                15+
              </h3>

              {/* TEXT */}
              <p className="text-gray-500 mt-2">
                Industry Awards
              </p>

            </div>

          </div>

          {/* ================= BUTTON ================= */}
          <Link
            to="/about"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-teal-500 to-lime-400 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-105"
          >
            Learn more about us →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default JourneySection;