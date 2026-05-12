import React from "react";
import bookImage from "../photos/book1.png";

const Hero = () => {
    return (
        // FULL WIDTH BACKGROUND (gradient like your design)
        <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 px-4">

            {/* CENTER CONTAINER */}
            <div className="max-w-7xl mx-auto">

                {/* WHITE CARD */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="flex-1">

                        {/* HEADING */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            <span className="text-teal-600">Mindful</span>
                            <br />
                            Reading Experience
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-4 text-gray-600 max-w-md">
                            Curated knowledge journeys that challenge perceptions and inspire growth.
                            Discover transformative content crafted for the modern intellect.
                        </p>

                        {/* SEARCH BAR */}
                        <div className="mt-6 flex items-center bg-gray-100 rounded-xl px-4 py-2 max-w-md">

                            <span className="text-gray-400 mr-2">🔍</span>

                            <input
                                type="text"
                                placeholder="Search authors, titles, or concepts..."
                                className="bg-transparent outline-none w-full text-sm"
                            />

                            <button className="ml-3 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                                Search
                            </button>

                        </div>

                        {/* STATS */}
                        <div className="flex gap-8 mt-8 text-gray-700">

                            <div>
                                <h2 className="font-bold text-xl">50k+</h2>
                                <p className="text-sm text-gray-500">Titles</p>
                            </div>

                            <div>
                                <h2 className="font-bold text-xl">1.2M</h2>
                                <p className="text-sm text-gray-500">Readers</p>
                            </div>

                            <div>
                                <h2 className="font-bold text-xl">240+</h2>
                                <p className="text-sm text-gray-500">Topics</p>
                            </div>

                        </div>

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="flex-1 flex justify-center">

                        <img
                            src={bookImage}
                            alt="Book"
                            className="
    rounded-full      
    object-cover          /* fills circle nicely */
    w-40 h-40             /* size on mobile */
    md:w-64 md:h-64       /* bigger on desktop */
    mx-auto               /* center it */
  "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero; 