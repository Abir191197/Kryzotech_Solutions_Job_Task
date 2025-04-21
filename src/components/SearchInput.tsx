interface Props {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

export default function SearchInput({ query, setQuery, onSearch }: Props) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search for books by title..."
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}
