import React from "react";

const AboutHero = () => {
  return (

    // ================= MAIN SECTION =================
    <section
      className="
        bg-gradient-to-br
        from-[#f7fffd]
        via-[#eefaf7]
        to-[#f9fffb]
        pt-12
        pb-20
        px-6
        relative
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          top-0
          left-0
          w-80
          h-80
          bg-teal-200/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-80
          h-80
          bg-lime-200/20
          blur-3xl
          rounded-full
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= TOP CONTENT ================= */}

        <div className="text-center max-w-4xl mx-auto">

          {/* SMALL BADGE */}

          <div
            className="
              inline-block
              bg-white
              px-5
              py-2
              rounded-full
              shadow-md
              text-sm
              font-semibold
              text-teal-600
            "
          >
            ABOUT BOOKSHELL
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-6
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              tracking-tight
              text-gray-900
            "
          >
            Crafting Literary
            <br />

            <span
              className="
                bg-gradient-to-r
                from-teal-500
                to-lime-400
                bg-clip-text
                text-transparent
              "
            >
              Futures
            </span>
          </h1>

          {/* LINE */}

          <div
            className="
              w-36
              h-1.5
              bg-gradient-to-r
              from-teal-400
              to-lime-300
              rounded-full
              mx-auto
              mt-6
            "
          />

          {/* TEXT */}

          <p
            className="
              mt-8
              text-gray-600
              text-lg
              md:text-2xl
              leading-9
            "
          >
            Pioneering the next chapter in global storytelling.
            We bridge imagination with innovation through curated
            literary experiences.
          </p>

        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {/* CARD 1 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-teal-400
                to-lime-300
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              🏆
            </div>

            <h2
              className="
                mt-8
                text-5xl
                font-extrabold
                text-gray-800
              "
            >
              25K+
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                text-lg
              "
            >
              Awards Won
            </p>

          </div>

          {/* CARD 2 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-teal-400
                to-lime-300
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              👥
            </div>

            <h2
              className="
                mt-8
                text-5xl
                font-extrabold
                text-gray-800
              "
            >
              1M+
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                text-lg
              "
            >
              Active Readers
            </p>

          </div>

          {/* CARD 3 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-teal-400
                to-lime-300
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              📖
            </div>

            <h2
              className="
                mt-8
                text-5xl
                font-extrabold
                text-gray-800
              "
            >
              100K+
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                text-lg
              "
            >
              Books Available
            </p>

          </div>

          {/* CARD 4 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-teal-400
                to-lime-300
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              ⭐
            </div>

            <h2
              className="
                mt-8
                text-5xl
                font-extrabold
                text-gray-800
              "
            >
              4.9
            </h2>

            <p
              className="
                mt-3
                text-gray-500
                text-lg
              "
            >
              Average Rating
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;