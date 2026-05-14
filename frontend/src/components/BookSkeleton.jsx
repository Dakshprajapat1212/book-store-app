import React from "react";

/**
 * BookSkeleton Loading Component
 * 
 * FEATURES:
 * - Shimmer loading animation
 * - Same dimensions as BookCard
 * - Smooth loading state
 * - Reduces perceived wait time
 * 
 * WHY THIS DESIGN?
 * - Better UX than spinner
 * - Shows content structure
 * - Professional appearance
 */

const BookSkeleton = () => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-gray-100">
      {/* Image Placeholder */}
      <div className="relative">
        <div className="w-full h-72 bg-gray-200 animate-pulse">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_200%] animate-shimmer" />
        </div>
        {/* Rating Badge Placeholder */}
        <div className="absolute top-4 right-4 w-16 h-8 bg-gray-200 rounded-full animate-pulse" />
      </div>

      {/* Content Placeholder */}
      <div className="p-5">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-3" />
        
        {/* Author */}
        <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-2 w-2/3" />
        
        {/* Price and Button */}
        <div className="flex items-center justify-between mt-6">
          {/* Price */}
          <div>
            <div className="h-3 bg-gray-200 rounded animate-pulse mb-2 w-12" />
            <div className="h-8 bg-gray-200 rounded animate-pulse w-20" />
          </div>
          
          {/* Button */}
          <div className="h-10 w-24 bg-gray-200 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BookSkeleton;