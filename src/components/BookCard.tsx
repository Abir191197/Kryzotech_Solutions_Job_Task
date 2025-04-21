import { BookOpen } from "lucide-react";

interface Props {
  title: string;
  author?: string;
  publishedYear?: number;
  cover?: string;
}

export default function BookCard({
  title,
  author,
  publishedYear,
  cover,
}: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 bg-white max-w-sm">
      {cover ? (
        <img
          src={cover}
          alt={`${title} cover`}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
          <BookOpen size={48} className="text-indigo-500 opacity-80" />
        </div>
      )}

      <div className="p-5">
        <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center justify-between">
          <div>
            {author && <p className="text-gray-600 font-medium">by {author}</p>}
          </div>
          {publishedYear && (
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {publishedYear}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
