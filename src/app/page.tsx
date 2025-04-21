"use client";
import { useState } from "react";
import SearchInput from "@/components/SearchInput";
import BookCard from "@/components/BookCard";
import Loading from "@/components/loading";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Online Book Store </h1>
      <SearchInput query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <Loading></Loading>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {books.length > 0
          ? books.map((book: any) => (
              <BookCard
                key={book.key}
                title={book.title}
                author={book.author_name?.[0]}
              publishedYear={book.first_publish_year} 
              cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : undefined}
              />
            ))
          : !loading && (
              <p className="col-span-full text-gray-500">No results found.</p>
            )}
      </div>
    </main>
  );
}
