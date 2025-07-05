import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between w-full">
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21~bgwhite.svg"
          alt="Airbnb Logo"
          width={120}
          height={60}
        />

        <SearchBar />

        <div className="flex items-center gap-2">
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
            Become a host
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-600"
            >
              <path
                fill="currentColor"
                d="M12 0a12 12 0 0 0-9.26 19.64C9.91 28.29 24 23.21 24 12A12 12 0 0 0 12 0zm8.39 17.44A11.82 11.82 0 0 0 16.83 15a27.47 27.47 0 0 0 0-6.08 11.82 11.82 0 0 0 3.56-2.4 10 10 0 0 1 0 10.92zm-4.78 3.87c-1 .4.16.2.95-4.21a10 10 0 0 1 2.58 1.9 9.81 9.81 0 0 1-3.53 2.31zm-3.68.69c-.75-.1-2-1.94-2.58-5.65a10.35 10.35 0 0 1 5.3 0c-.24 1.48-1.22 5.65-2.72 5.65zm-3.54-.69A9.9 9.9 0 0 1 4.86 19a10 10 0 0 1 2.58-1.9c.81 4.51 2.02 4.63.95 4.21zm0-18.64c.86-.33-.25 0-1 4.23A10 10 0 0 1 4.86 5a9.79 9.79 0 0 1 3.58-2.33zm7.12 0A9.87 9.87 0 0 1 19.14 5a10 10 0 0 1-2.58 1.9c-.8-4.46-1.97-4.61-1-4.23zm-6.4 11.69a25.66 25.66 0 0 1 0-4.72 11.78 11.78 0 0 0 5.78 0 24.81 24.81 0 0 1 0 4.72 12.28 12.28 0 0 0-5.78 0zM11.91 2c1.51 0 2.5 4.16 2.74 5.65a10.35 10.35 0 0 1-5.3 0C10 4 11.17 2.12 11.91 2zm-8.3 4.56A11.82 11.82 0 0 0 7.17 9a27.47 27.47 0 0 0 0 6.08 11.82 11.82 0 0 0-3.56 2.4 10 10 0 0 1 0-10.92z"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 px-3 py-1 border rounded-full hover:shadow-md transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
            <div className="w-6 h-6 bg-gray-500 rounded-full text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
