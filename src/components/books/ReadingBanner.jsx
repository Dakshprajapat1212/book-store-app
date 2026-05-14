import React from "react";

const ReadingBanner = () => {
  return (

    <section className="px-6 pb-28">

      <div
        className="
          max-w-6xl
          mx-auto
          bg-[#0f172a]
          rounded-[40px]
          p-16
          text-center
          relative
          overflow-hidden
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-r
            from-teal-500/10
            to-lime-400/10
          "
        />

        <div className="relative z-10">

          <h2
            className="
              text-5xl
              font-black
              text-white
              leading-tight
            "
          >
            Discover Your
            <span className="text-teal-400">
              {" "}Next Favorite Book
            </span>
          </h2>

          <p
            className="
              text-gray-300
              text-lg
              mt-6
              max-w-2xl
              mx-auto
            "
          >
            Thousands of stories, ideas, and adventures
            waiting to transform your imagination.
          </p>

          <button
            className="
              mt-10
              bg-gradient-to-r
              from-teal-500
              to-lime-400
              text-white
              px-10
              py-4
              rounded-full
              font-bold
              hover:scale-105
              transition
            "
          >
            Start Exploring →
          </button>

        </div>

      </div>

    </section>
  );
};

export default ReadingBanner;