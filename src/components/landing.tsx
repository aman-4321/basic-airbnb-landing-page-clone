import Card from "./card";
import { locationData } from "../data/data";

export default function Landing() {
  return (
    <div className="px-20 py-8 space-y-12">
      {locationData.map((location) => (
        <section key={location.city} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Popular homes in {location.city}
            </h2>
            <div className="flex gap-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => {
                  const container = document.getElementById(
                    `scroll-${location.city}`
                  );
                  container?.scrollBy({ left: -300, behavior: "smooth" });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => {
                  const container = document.getElementById(
                    `scroll-${location.city}`
                  );
                  container?.scrollBy({ left: 300, behavior: "smooth" });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            id={`scroll-${location.city}`}
            className="grid grid-cols-7 gap-6 pb-4"
          >
            {location.properties.map((property) => (
              <div key={property.id}>
                <Card
                  imageUrl={property.imageUrl}
                  location={property.location}
                  price={property.price}
                  nights={property.nights}
                  rating={property.rating}
                  isFavorite={false}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
