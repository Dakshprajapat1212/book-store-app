import React, { useState } from "react";
import { BOOK_IMAGE_FALLBACK } from "../constants/images";

function BookCoverImageInner({ src, alt, className = "", loading = "lazy" }) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <img
      src={useFallback ? BOOK_IMAGE_FALLBACK : src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setUseFallback(true)}
    />
  );
}

/**
 * Remote book cover with graceful fallback when a URL fails or is blocked.
 * Remounts when `src` changes so a previously failed URL can retry.
 */
export default function BookCoverImage(props) {
  return <BookCoverImageInner key={props.src} {...props} />;
}
