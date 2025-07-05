interface CardProps {
  imageUrl: string;
  location: string;
  price: number;
  nights: number;
  rating: number;
  isFavorite?: boolean;
}

export default function Card({
  imageUrl,
  location,
  price,
  nights,
  rating,
  isFavorite = false,
}: CardProps) {
  return (
    <div className="relative flex flex-col group cursor-pointer w-full">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={`${location} property`}
          className="absolute w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 z-10">
          <svg
            viewBox="0 0 24 24"
            fill={isFavorite ? "rgb(255, 56, 92)" : "rgba(0, 0, 0, 0.5)"}
            stroke="white"
            strokeWidth="2"
            className="w-7 h-7"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      <div className="mt-2 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-sm line-clamp-1">{location}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
            </svg>
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          ₹{price.toLocaleString()} for {nights} nights
        </p>
      </div>
    </div>
  );
}
