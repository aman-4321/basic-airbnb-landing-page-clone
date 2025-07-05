import { useState } from "react";
import GuestSelector from "./GuestSelector";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export default function SearchBar() {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const totalGuests = guestCounts.adults + guestCounts.children;
  const guestText =
    totalGuests === 0
      ? "Add guests"
      : `${totalGuests} guest${totalGuests > 1 ? "s" : ""}${
          guestCounts.infants
            ? `, ${guestCounts.infants} infant${
                guestCounts.infants > 1 ? "s" : ""
              }`
            : ""
        }${
          guestCounts.pets
            ? `, ${guestCounts.pets} pet${guestCounts.pets > 1 ? "s" : ""}`
            : ""
        }`;

  return (
    <div className="flex items-center shadow-lg border border-gray-200 rounded-full py-2 hover:shadow-xl transition-shadow">
      <button className="px-12 py-3 hover:bg-gray-100 rounded-full transition-colors">
        <div className="text-sm font-semibold">Where</div>
        <div className="text-sm text-gray-500">Search destinations</div>
      </button>

      <div className="h-9 w-[1px] bg-gray-200"></div>

      <button className="px-10 py-3 hover:bg-gray-100 rounded-full transition-colors">
        <div className="text-sm font-semibold">Check in</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </button>

      <div className="h-9 w-[1px] bg-gray-200"></div>

      <button className="px-10 py-3 hover:bg-gray-100 rounded-full transition-colors">
        <div className="text-sm font-semibold">Check out</div>
        <div className="text-sm text-gray-500">Add dates</div>
      </button>

      <div className="h-9 w-[1px] bg-gray-200"></div>

      <div className="flex items-center relative">
        <button
          className="pl-10 pr-20 py-3 hover:bg-gray-100 rounded-l-full transition-colors"
          onClick={() => setIsGuestSelectorOpen(!isGuestSelectorOpen)}
        >
          <div className="text-sm font-semibold">Who</div>
          <div className="text-sm text-gray-500">{guestText}</div>
        </button>
        <button className="p-3 bg-[#FF385C] rounded-full text-white hover:bg-[#E31C5F] transition-colors mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <GuestSelector
          isOpen={isGuestSelectorOpen}
          onClose={() => setIsGuestSelectorOpen(false)}
          onGuestChange={setGuestCounts}
        />
      </div>
    </div>
  );
}
