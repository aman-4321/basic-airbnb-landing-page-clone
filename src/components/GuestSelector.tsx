import { useState } from "react";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface GuestSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onGuestChange: (guests: GuestCounts) => void;
}

export default function GuestSelector({
  isOpen,
  onGuestChange,
}: GuestSelectorProps) {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleIncrement = (type: keyof GuestCounts) => {
    setGuestCounts((prev) => {
      const newCounts = { ...prev, [type]: prev[type] + 1 };
      onGuestChange(newCounts);
      return newCounts;
    });
  };

  const handleDecrement = (type: keyof GuestCounts) => {
    setGuestCounts((prev) => {
      if (prev[type] === 0) return prev;
      const newCounts = { ...prev, [type]: prev[type] - 1 };
      onGuestChange(newCounts);
      return newCounts;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-3 w-[400px] bg-white rounded-3xl shadow-xl border border-gray-200 p-8 z-50">
      <div className="flex items-center justify-between py-6 border-b border-gray-200">
        <div>
          <h3 className="text-base font-semibold">Adults</h3>
          <p className="text-sm text-gray-500 mt-1">Ages 13 or above</p>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleDecrement("adults")}
            className={`w-9 h-9 rounded-full border flex items-center justify-center ${
              guestCounts.adults === 0
                ? "border-gray-200 text-gray-200 cursor-not-allowed"
                : "border-gray-400 text-gray-500 hover:border-gray-700"
            }`}
            disabled={guestCounts.adults === 0}
          >
            -
          </button>
          <span className="w-8 text-center text-base">
            {guestCounts.adults}
          </span>
          <button
            onClick={() => handleIncrement("adults")}
            className="w-9 h-9 rounded-full border border-gray-400 text-gray-500 hover:border-gray-700 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 border-b border-gray-200">
        <div>
          <h3 className="text-base font-semibold">Children</h3>
          <p className="text-sm text-gray-500 mt-1">Ages 2-12</p>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleDecrement("children")}
            className={`w-9 h-9 rounded-full border flex items-center justify-center ${
              guestCounts.children === 0
                ? "border-gray-200 text-gray-200 cursor-not-allowed"
                : "border-gray-400 text-gray-500 hover:border-gray-700"
            }`}
            disabled={guestCounts.children === 0}
          >
            -
          </button>
          <span className="w-8 text-center text-base">
            {guestCounts.children}
          </span>
          <button
            onClick={() => handleIncrement("children")}
            className="w-9 h-9 rounded-full border border-gray-400 text-gray-500 hover:border-gray-700 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 border-b border-gray-200">
        <div>
          <h3 className="text-base font-semibold">Infants</h3>
          <p className="text-sm text-gray-500 mt-1">Under 2</p>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleDecrement("infants")}
            className={`w-9 h-9 rounded-full border flex items-center justify-center ${
              guestCounts.infants === 0
                ? "border-gray-200 text-gray-200 cursor-not-allowed"
                : "border-gray-400 text-gray-500 hover:border-gray-700"
            }`}
            disabled={guestCounts.infants === 0}
          >
            -
          </button>
          <span className="w-8 text-center text-base">
            {guestCounts.infants}
          </span>
          <button
            onClick={() => handleIncrement("infants")}
            className="w-9 h-9 rounded-full border border-gray-400 text-gray-500 hover:border-gray-700 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-6">
        <div>
          <h3 className="text-base font-semibold">Pets</h3>
          <p className="text-sm text-gray-500 mt-1 hover:underline cursor-pointer">
            Bringing a service animal?
          </p>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleDecrement("pets")}
            className={`w-9 h-9 rounded-full border flex items-center justify-center ${
              guestCounts.pets === 0
                ? "border-gray-200 text-gray-200 cursor-not-allowed"
                : "border-gray-400 text-gray-500 hover:border-gray-700"
            }`}
            disabled={guestCounts.pets === 0}
          >
            -
          </button>
          <span className="w-8 text-center text-base">{guestCounts.pets}</span>
          <button
            onClick={() => handleIncrement("pets")}
            className="w-9 h-9 rounded-full border border-gray-400 text-gray-500 hover:border-gray-700 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
