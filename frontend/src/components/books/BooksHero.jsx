import React from "react";

const BooksHero = () => {
  return (

    <section
      className="
        relative
        overflow-hidden
        pt-28
        pb-24
        px-6
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-teal-50
          via-white
          to-lime-50
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          top-10
          left-20
          w-72
          h-72
          bg-teal-200/30
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          text-center
        "
      >

        {/* TAG */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            bg-white
            shadow-md
            px-5
            py-2
            rounded-full
            text-sm
            font-semibold
            text-teal-600
          "
        >
          ✦ EXPLORE COLLECTION
        </div>

        {/* HEADING */}
        <h1
          className="
            text-6xl
            md:text-7xl
            font-black
            text-[#0f172a]
            leading-tight
            mt-8
          "
        >
          Literary
          <span className="block text-teal-500">
            Universe
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-600
            text-xl
            leading-9
            max-w-3xl
            mx-auto
            mt-8
          "
        >
          Explore timeless classics, transformative ideas,
          immersive fiction, and beautifully curated reading
          experiences crafted for modern readers.
        </p>

      </div>

    </section>
  );
};

export default BooksHero;