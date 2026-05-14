import React from "react";

const WhyChooseSection = () => {
  return (

    <section className="bg-white py-28 px-6">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">

          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-teal-50
              text-teal-700
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            ✦ WHY BOOKSHELL
          </div>

          {/* TITLE */}
          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              mt-7
              leading-tight
            "
          >
            Why Readers
            <span className="text-teal-500">
              {" "}Choose Us
            </span>
          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-600
              text-lg
              leading-8
              mt-7
            "
          >
            We combine modern digital experiences with
            timeless storytelling to create a platform
            readers genuinely love spending time in.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            mt-20
          "
        >

          {/* CARD 1 */}
          <div
            className="
              bg-[#f8faf9]
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition
              duration-300
              border
              border-gray-100
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-teal-400
                to-cyan-400
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              📚
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mt-7
                text-gray-800
              "
            >
              Curated Collections
            </h3>

            <p
              className="
                text-gray-500
                leading-7
                mt-4
              "
            >
              Discover handpicked books chosen by
              passionate literary experts.
            </p>

          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-black
              text-white
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              ⚡
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mt-7
              "
            >
              Fast Experience
            </h3>

            <p
              className="
                text-gray-300
                leading-7
                mt-4
              "
            >
              Smooth browsing and immersive reading
              optimized for modern readers.
            </p>

          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-[#f8faf9]
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition
              duration-300
              border
              border-gray-100
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-lime-300
                to-teal-400
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              🌍
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mt-7
                text-gray-800
              "
            >
              Global Community
            </h3>

            <p
              className="
                text-gray-500
                leading-7
                mt-4
              "
            >
              Join thousands of readers exploring
              stories from around the world.
            </p>

          </div>

          {/* CARD 4 */}
          <div
            className="
              bg-gradient-to-br
              from-teal-500
              to-cyan-500
              text-white
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition
              duration-300
              shadow-xl
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white/20
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              ✨
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mt-7
              "
            >
              Premium Design
            </h3>

            <p
              className="
                text-white/80
                leading-7
                mt-4
              "
            >
              Beautiful interfaces designed to make
              reading feel inspiring and elegant.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;