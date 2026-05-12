// src/pages/BooksPage.jsx
import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";

/**
 * ✅ Professional / production-like Books Page UI (Frontend only)
 * - Search works (title/author/description)
 * - Genre filter works
 * - Sort works (Popularity/Price/Title)
 * - Result count updates
 * - Cards look cleaner + consistent
 *
 * Backend later: replace BOOKS array with API data, everything still works.
 */

const BOOKS = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    genre: "Self Growth",
    popularity: 98,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=60",
    description:
      "Transform your habits and unlock the power of consistent growth.",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 599,
    genre: "Business",
    popularity: 92,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=60",
    description: "Timeless lessons about wealth, greed, and happiness.",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: 450,
    genre: "Self Growth",
    popularity: 90,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=60",
    description: "Master focus and produce meaningful work in a distracted world.",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 399,
    genre: "Fiction",
    popularity: 95,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=60",
    description: "A magical story about destiny, dreams, and self-discovery.",
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 520,
    genre: "Business",
    popularity: 89,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=60",
    description: "Learn financial literacy and the mindset of wealth creation.",
  },
  {
    id: 6,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 699,
    genre: "History",
    popularity: 88,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=60",
    description: "Explore the history and evolution of humankind.",
  },
  {
    id: 7,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 799,
    genre: "Fantasy",
    popularity: 97,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60",
    description: "Enter a magical universe full of friendship and adventure.",
  },
  {
    id: 8,
    title: "Zero To One",
    author: "Peter Thiel",
    price: 480,
    genre: "Technology",
    popularity: 86,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=60",
    description: "Build the future by creating something truly unique.",
  },
];

const GENRES = ["All", "Business", "Fantasy", "Technology", "Self Growth", "Fiction", "History"];

const BooksPage = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("Popularity"); // Popularity | Price Low | Price High | Title

  const filteredBooks = useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = BOOKS.filter((b) => {
      const matchesGenre = genre === "All" ? true : b.genre === genre;
      const text = `${b.title} ${b.author} ${b.description}`.toLowerCase();
      const matchesSearch = q.length === 0 ? true : text.includes(q);
      return matchesGenre && matchesSearch;
    });

    if (sort === "Popularity") list = list.sort((a, b) => b.popularity - a.popularity);
    if (sort === "Price Low") list = list.sort((a, b) => a.price - b.price);
    if (sort === "Price High") list = list.sort((a, b) => b.price - a.price);
    if (sort === "Title") list = list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [search, genre, sort]);

  return (
    <>
      <div className="min-h-screen bg-[#f5f9f8]">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden px-6 pt-24 pb-16">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-lime-50" />
          <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
          <div className="absolute -top-10 right-10 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-5 py-2 text-sm font-semibold text-teal-600 shadow-sm backdrop-blur">
              ✦ EXPLORE COLLECTION
            </div>

            <h1 className="mt-8 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl">
              Literary Universe
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              Explore timeless classics, transformative ideas, immersive fiction, and beautifully curated
              reading experiences crafted for modern readers.
            </p>
          </div>
        </section>

        {/* ================= SEARCH / FILTER CARD ================= */}
        <section className="relative z-20 -mt-6 px-6">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-gray-100 bg-white p-6 shadow-2xl md:p-8">
            {/* Search Row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex flex-1 items-center rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
                <span className="text-xl text-gray-400">🔍</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search books, authors..."
                  className="ml-4 w-full bg-transparent text-base outline-none md:text-lg"
                />
              </div>

              <button
                onClick={() => {}}
                className="rounded-2xl bg-gradient-to-r from-teal-500 to-lime-400 px-8 py-4 font-semibold text-white shadow-lg hover:opacity-95"
              >
                Search
              </button>
            </div>

            {/* Filters Row */}
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-3">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 outline-none"
                >
                  {GENRES.map((g) => (
                    <option key={g} value={g}>
                      {g === "All" ? "All Genres" : g}
                    </option>
                  ))}
                </select>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 outline-none"
                >
                  <option value="Popularity">Sort by Popularity</option>
                  <option value="Price Low">Price: Low to High</option>
                  <option value="Price High">Price: High to Low</option>
                  <option value="Title">Sort by Title</option>
                </select>
              </div>

              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold">{filteredBooks.length}</span> result(s)
              </p>
            </div>

            {/* Genre Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {GENRES.map((g) => {
                const active = genre === g;
                return (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-[#0f172a] text-white"
                        : "bg-white text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-teal-500 hover:text-white hover:ring-transparent"
                    }`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= BOOKS GRID ================= */}
        <section className="px-6 pb-24 pt-12">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-100 bg-white p-6 shadow-xl md:p-10">
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-black text-[#0f172a] md:text-4xl">Popular Reads</h2>
                <p className="mt-2 text-gray-500">Curated for modern readers</p>
              </div>

              <div className="text-sm text-gray-500">
      
              </div>
            </div>

            {filteredBooks.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gray-200 bg-gray-50 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-lime-400 text-2xl text-white shadow-lg">
                  📚
                </div>
                <h3 className="mt-6 text-2xl font-black text-[#0f172a]">No books found</h3>
                <p className="mt-2 text-gray-500">Try changing search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      {/* Rating badge */}
                      <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#0f172a] backdrop-blur">
                        ⭐ {book.rating}
                      </div>
                      {/* Genre badge */}
                      <div className="absolute right-4 top-4 rounded-full bg-[#0f172a]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                        {book.genre}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-extrabold text-[#0f172a] line-clamp-1">
                        {book.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-1">by {book.author}</p>

                      <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-2">
                        {book.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold text-gray-500">Price</div>
                          <div className="text-xl font-black text-teal-600">₹{book.price}</div>
                        </div>

                        <button
                          className="rounded-full bg-gradient-to-r from-teal-500 to-lime-400 px-5 py-2 text-sm font-bold text-white shadow hover:opacity-95"
                          onClick={() => {
                            // UI only: later you will connect cart logic here
                            alert(`Added: ${book.title}`);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="px-6 pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#0f172a] p-10 text-center shadow-2xl md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-lime-400/10" />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white md:text-5xl">
                Discover Your <span className="text-teal-400">Next Favorite Book</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
                Thousands of stories, ideas, and adventures waiting to transform your imagination.
              </p>

              <button className="mt-10 rounded-full bg-gradient-to-r from-teal-500 to-lime-400 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105">
                Start Exploring →
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BooksPage;