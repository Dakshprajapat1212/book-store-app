import React from "react";

const RedefiningSection = () => {
  return (

    <section className="bg-[#f7faf9] py-28 px-6">

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          bg-white
          rounded-[40px]
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >

        {/* ================= LEFT SIDE ================= */}
        <div className="relative min-h-[550px]">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1400&auto=format&fit=crop"
            alt="Books"

            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/40
              to-transparent
            "
          />

          {/* CONTENT */}
          <div
            className="
              absolute
              bottom-10
              left-10
              z-10
              text-white
            "
          >

            <p
              className="
                uppercase
                tracking-[5px]
                text-xs
                text-gray-300
                mb-4
              "
            >
              Since 2015
            </p>

            <h2
              className="
                text-5xl
                font-black
                leading-[0.95]
              "
            >
              Books
              <br />
              Beyond
              <br />
              Pages
            </h2>

            <div
              className="
                w-16
                h-1
                bg-teal-400
                rounded-full
                mt-6
              "
            />

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            p-10
            md:p-16
            flex
            flex-col
            justify-center
          "
        >

          {/* TAG */}
          <div
            className="
              w-fit
              bg-teal-50
              text-teal-700
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            ✦ OUR MISSION
          </div>

          {/* HEADING */}
          <h2
            className="
              text-5xl
              xl:text-6xl
              font-black
              leading-tight
              text-gray-900
              mt-7
            "
          >
            Redefining
            <br />
            <span className="text-teal-500">
              Storytelling
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-600
              text-lg
              leading-9
              mt-8
              max-w-xl
            "
          >
            We create immersive literary experiences where
            stories inspire curiosity, imagination, and
            meaningful connections for modern readers.
          </p>

          {/* FEATURE CARDS */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              mt-10
            "
          >

            {/* CARD 1 */}
            <div
              className="
                bg-gray-50
                rounded-3xl
                p-7
                border
                border-gray-100
                hover:shadow-lg
                transition
              "
            >

              <div className="text-3xl">
                🌍
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-800
                  mt-5
                "
              >
                Global Vision
              </h3>

              <p
                className="
                  text-gray-500
                  leading-7
                  mt-3
                "
              >
                Connecting readers worldwide through
                timeless literary experiences.
              </p>

            </div>

            {/* CARD 2 */}
            <div
              className="
                bg-gradient-to-br
                from-teal-500
                to-cyan-500
                rounded-3xl
                p-7
                text-white
                shadow-lg
              "
            >

              <div className="text-3xl">
                🚀
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-5
                "
              >
                Innovation
              </h3>

              <p
                className="
                  text-white/80
                  leading-7
                  mt-3
                "
              >
                Reimagining reading with premium
                digital storytelling experiences.
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button
            className="
              mt-10
              bg-black
              text-white
              w-fit
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
            "
          >
            Explore Our Vision →
          </button>

        </div>

      </div>

    </section>
  );
};

export default RedefiningSection;