import React from "react";

const ReadingPhilosophy = () => {
  return (

    <section className="bg-[#0f172a] py-28 px-6 overflow-hidden">

      {/* CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-white/10
              text-teal-300
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              backdrop-blur-md
            "
          >
            ✦ OUR PHILOSOPHY
          </div>

          {/* HEADING */}
          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
              leading-tight
              mt-8
            "
          >
            Reading Should
            <br />
            Feel
            <span className="text-teal-400">
              {" "}Magical
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-300
              text-lg
              leading-9
              mt-8
              max-w-xl
            "
          >
            At BookShell, we believe books are more than
            products — they are gateways to imagination,
            wisdom, emotion, and transformation.
            Every interaction is designed to feel immersive,
            calming, and inspiring.
          </p>

          {/* FEATURES */}
          <div className="space-y-6 mt-12">

            {/* ITEM */}
            <div className="flex items-start gap-5">

              <div
                className="
                  min-w-[55px]
                  h-[55px]
                  rounded-2xl
                  bg-gradient-to-br
                  from-teal-400
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                📖
              </div>

              <div>

                <h3
                  className="
                    text-white
                    text-2xl
                    font-bold
                  "
                >
                  Curated Experiences
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
                    mt-2
                  "
                >
                  Every collection is thoughtfully designed
                  to inspire meaningful discovery.
                </p>

              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-5">

              <div
                className="
                  min-w-[55px]
                  h-[55px]
                  rounded-2xl
                  bg-gradient-to-br
                  from-lime-300
                  to-teal-400
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                ✨
              </div>

              <div>

                <h3
                  className="
                    text-white
                    text-2xl
                    font-bold
                  "
                >
                  Beautiful Design
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
                    mt-2
                  "
                >
                  A modern interface crafted for comfort,
                  elegance, and immersion.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1400&auto=format&fit=crop"
            alt="Reading"

            className="
              rounded-[40px]
              shadow-2xl
              w-full
              h-[650px]
              object-cover
            "
          />

          {/* FLOATING CARD */}
          <div
            className="
              absolute
              bottom-8
              left-8
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              p-8
              max-w-sm
            "
          >

            <h3
              className="
                text-white
                text-3xl
                font-bold
              "
            >
              “Books transform ordinary moments into unforgettable journeys.”
            </h3>

            <p
              className="
                text-teal-300
                mt-5
                font-medium
              "
            >
              — BookShell Philosophy
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReadingPhilosophy;