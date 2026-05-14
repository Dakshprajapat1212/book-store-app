/**
 * Stable Unsplash image URLs (verified HTTP 200) for book covers.
 * imgix query params ensure consistent sizing and caching.
 */
const Q = "?auto=format&fit=crop&w=600&q=80";

const UNSPLASH_COVERS = [
  `https://images.unsplash.com/photo-1544947950-fa07a98d237f${Q}`,
  `https://images.unsplash.com/photo-1512820790803-83ca734da794${Q}`,
  `https://images.unsplash.com/photo-1516979187457-637abb4f9353${Q}`,
  `https://images.unsplash.com/photo-1495446815901-a7297e633e8d${Q}`,
  `https://images.unsplash.com/photo-1519682337058-a94d519337bc${Q}`,
  `https://images.unsplash.com/photo-1521587760476-6c12a4b040da${Q}`,
  `https://images.unsplash.com/photo-1507842217343-583bb7270b66${Q}`,
  `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f${Q}`,
  `https://images.unsplash.com/photo-1497633762265-9d179a990aa6${Q}`,
  `https://images.unsplash.com/photo-1589829085413-56de8ae18c73${Q}`,
  `https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50${Q}`,
  `https://images.unsplash.com/photo-1553729459-efe14ef6055d${Q}`,
];

/** Deterministic cover per numeric book id (1-based). */
export function bookCoverForId(id) {
  const n = Number(id);
  if (!Number.isFinite(n) || n < 1) {
    return UNSPLASH_COVERS[0];
  }
  return UNSPLASH_COVERS[(n - 1) % UNSPLASH_COVERS.length];
}
