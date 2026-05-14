import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f7f7] px-6 pt-20 pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">📚</span>
            <h2 className="text-3xl font-black text-teal-600">BOOKSHELL</h2>
          </div>
          <p className="mt-5 leading-7 text-slate-500">
            Your gateway to literary adventures. Discover, explore, and immerse yourself in the world of books.
          </p>

          <div className="mt-7 flex gap-3">
            {["📘", "🐦", "📸", "▶️"].map((i, idx) => (
              <button
                key={idx}
                className="h-11 w-11 rounded-full bg-white shadow-sm transition hover:bg-teal-500 hover:text-white"
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        {/* links */}
        <div>
          <h3 className="text-xl font-black text-slate-900">Quick Links</h3>
          <div className="mt-6 flex flex-col gap-3 text-slate-500">
            <a className="hover:text-teal-600" href="/">Home</a>
            <a className="hover:text-teal-600" href="/about">About</a>
            <a className="hover:text-teal-600" href="/books">Books</a>
            <a className="hover:text-teal-600" href="/contact">Contact</a>
          </div>
        </div>

        {/* newsletter */}
        <div>
          <h3 className="text-xl font-black text-slate-900">Stay Updated</h3>
          <p className="mt-5 leading-7 text-slate-500">
            Subscribe to our newsletter for the latest releases and exclusive offers.
          </p>

          <div className="mt-6 flex overflow-hidden rounded-2xl bg-white shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 outline-none"
            />
            <button className="bg-gradient-to-r from-teal-500 to-lime-400 px-6 font-black text-white hover:opacity-95">
              →
            </button>
          </div>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-xl font-black text-slate-900">Contact Us</h3>
          <div className="mt-6 flex flex-col gap-4 text-slate-500">
            <div className="flex gap-3">
              <span className="text-teal-600">📍</span>
              <p>123 Literary Lane, Bookville, BK 12345</p>
            </div>
            <div className="flex gap-3">
              <span className="text-teal-600">📞</span>
              <p>+1 (234) 567-8901</p>
            </div>
            <div className="flex gap-3">
              <span className="text-teal-600">✉️</span>
              <p>contact@bookshell.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
        © 2026 BookShell. All rights reserved. Powered by{" "}
        <span className="font-bold text-teal-600">Daksh Prajapat</span>
      </div>
    </footer>
  );
};

export default Footer;