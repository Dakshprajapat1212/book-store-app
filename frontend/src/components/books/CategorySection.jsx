import React from "react";

const categories = [
  "Fiction",
  "Business",
  "Self Growth",
  "Fantasy",
  "Technology",
  "History",
];

const CategorySection = () => {
  return (

    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-between">

          <h2
            className="
              text-4xl
              font-black
              text-[#0f172a]
            "
          >
            Explore Genres
          </h2>

          <p className="text-gray-500">
            Curated reading universes
          </p>

        </div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-5
            mt-10
          "
        >

          {categories.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                text-center
                shadow-md
                hover:-translate-y-2
                hover:shadow-xl
                transition
                duration-300
                cursor-pointer
              "
            >

              <div className="text-4xl mb-4">
                📚
              </div>

              <h3 className="font-bold text-gray-700">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CategorySection;