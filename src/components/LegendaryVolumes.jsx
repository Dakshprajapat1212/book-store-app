import React from "react";
import { Link } from "react-router-dom";
import BookCoverImage from "./BookCoverImage";

const LegendaryVolumes = () => {
  const volumes = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      description:
        "Between life and death there is a library, and within that library, the shelves go on forever.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 2,
      title: "Ancient Chronicles",
      author: "Lirael Morningstar",
      description:
        "Discover the secrets of ancient civilizations through their own words.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 3,
      title: "Coffee & Pages",
      author: "Evelyn Pagewright",
      description:
        "A collection of short stories perfect for your morning coffee ritual.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=60",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50/80 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
            Legendary <span className="text-teal-600">Volumes</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 to-lime-300" />
          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            Handpicked recommendations from our literary experts that you won't want to miss.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volumes.map((b) => (
            <div
              key={b.id}
              className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <BookCoverImage
                src={b.image}
                alt={b.title}
                className="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-900">{b.title}</h3>
                <p className="mt-1 text-sm font-semibold text-teal-600">{b.author}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{b.description}</p>

                <Link
                  to="/books"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-600 transition hover:gap-3"
                >
                  Discover <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendaryVolumes;