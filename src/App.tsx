import "./App.css";
import Landing from "./components/landing";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <header className="px-20 pt-4 pb-6 bg-gray-50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <img
              src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21~bgwhite.svg"
              alt="Airbnb Logo"
              width={120}
              height={60}
            />
            <div className="flex gap-6 text-gray-500">
              <div className="relative group">
                <button className="hover:text-gray-800 pb-4 pl-20">
                  Homes
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="relative group">
                <button className="hover:text-gray-800 pb-4">
                  Experiences
                  <span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-[10px] font-medium text-blue-600 rounded-full">
                    NEW
                  </span>
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="relative group">
                <button className="hover:text-gray-800 pb-4">
                  Services
                  <span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-[10px] font-medium text-blue-600 rounded-full">
                    NEW
                  </span>
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                Become a host
              </button>
              <button className="p-3 hover:bg-gray-200/80 rounded-full">
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
              <button className="flex items-center gap-3 px-3 py-1 border rounded-full hover:shadow-md transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    fill="currentColor"
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  />
                </svg>
                <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full pt-2 pb-3">
            <SearchBar />
          </div>
        </div>
      </header>
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
