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
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm">
      {/* Book Cover */}
      <div className="aspect-[2/3] bg-gray-50">
        {cover ? (
          <img
            src={cover}
            alt={`${title} cover`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
            <BookOpen size={48} className="text-indigo-500 opacity-80" />
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
          {title}
        </h2>

        {(author || publishedYear) && (
          <p className="text-sm text-gray-600">
            {author && (
              <>
                by <span className="font-medium">{author}</span>
              </>
            )}
            {publishedYear && (
              <>
                {author && <span className="text-gray-400"> · </span>}
                <span className="text-gray-500">
                  Published in {publishedYear}
                </span>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
