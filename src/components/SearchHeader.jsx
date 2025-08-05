import React, { useState } from "react";
import { MapPin, Calendar, Clock, X, ChevronDown } from "lucide-react";
import dayjs from "dayjs";

export default function BookingForm() {
  const [location, setLocation] = useState("Latina City");
  const [pickupDate, setPickupDate] = useState("2025-08-04T10:30");
  const [returnDate, setReturnDate] = useState("2025-08-07T10:30");

  const clearLocation = () => setLocation("");

  const getDaysBetween = () => {
    const diff = dayjs(returnDate).diff(dayjs(pickupDate), "day");
    return diff > 0 ? diff : 0;
  };

  return (
    <div className="bg-gray-200 py-4 px-4 md:px-6 lg:px-10 w-full">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-3 w-full">
        {/* Location */}
        <div className="flex-1 flex items-center border border-gray-200 bg-[var(--primoo-white)] px-4 py-2 rounded-md h-[54px] min-w-0 relative">
          <MapPin className="text-[var(--primoo-yellow)] mr-2" size={20} />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-semibold text-sm md:text-base">Pick-up Location</span>
            <span className="font-bold text-[var(--primoo-dark)] text-xs md:text-sm truncate">
              {location || "Select location"}
            </span>
          </div>
          {location && (
            <button 
              onClick={clearLocation} 
              className="absolute right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Date/Time Container */}
        <div className="flex flex-col md:flex-row gap-3 flex-[2]">
          {/* Pickup Date + Time */}
          <div className="flex-1 flex items-center border border-gray-200 bg-[var(--primoo-white)] rounded-md h-[54px] px-3 min-w-0">
            <Calendar size={16} className="text-gray-500 mr-2 flex-shrink-0" />
            <div className="flex flex-col pr-3 min-w-0">
              <span className="text-xs text-gray-500">Pick Up</span>
              <input
                type="date"
                value={pickupDate.split("T")[0]}
                onChange={(e) =>
                  setPickupDate(e.target.value + "T" + pickupDate.split("T")[1])
                }
                className="text-sm font-semibold text-[var(--primoo-dark)] bg-transparent border-none outline-none w-full"
              />
            </div>
            <div className="border-l h-[70%] mx-2" />
            <div className="flex items-center gap-1 min-w-0">
              <Clock size={16} className="text-gray-500 flex-shrink-0" />
              <input
                type="time"
                value={pickupDate.split("T")[1]}
                onChange={(e) =>
                  setPickupDate(pickupDate.split("T")[0] + "T" + e.target.value)
                }
                className="text-sm font-semibold text-[var(--primoo-dark)] bg-transparent border-none outline-none w-full"
              />
              <ChevronDown size={16} className="text-gray-400 cursor-pointer flex-shrink-0" />
            </div>
          </div>

          {/* Duration Badge - show on tablet and larger */}
          <div className="hidden md:flex flex-col items-center justify-center h-[54px] w-[54px] rounded-full bg-[var(--primoo-white)] border border-gray-200 text-center flex-shrink-0 mx-2">
            <span className="text-[var(--primoo-dark)] font-bold text-base">{getDaysBetween()}</span>
            <span className="text-xs text-gray-500">days</span>
          </div>

          {/* Return Date + Time */}
          <div className="flex-1 flex items-center border border-gray-200 bg-[var(--primoo-white)] rounded-md h-[54px] px-3 min-w-0">
            <Calendar size={16} className="text-gray-500 mr-2 flex-shrink-0" />
            <div className="flex flex-col pr-3 min-w-0">
              <span className="text-xs text-gray-500">Return</span>
              <input
                type="date"
                value={returnDate.split("T")[0]}
                onChange={(e) =>
                  setReturnDate(e.target.value + "T" + returnDate.split("T")[1])
                }
                className="text-sm font-semibold text-[var(--primoo-dark)] bg-transparent border-none outline-none w-full"
              />
            </div>
            <div className="border-l h-[70%] mx-2" />
            <div className="flex items-center gap-1 min-w-0">
              <Clock size={16} className="text-gray-500 flex-shrink-0" />
              <input
                type="time"
                value={returnDate.split("T")[1]}
                onChange={(e) =>
                  setReturnDate(returnDate.split("T")[0] + "T" + e.target.value)
                }
                className="text-sm font-semibold text-[var(--primoo-dark)] bg-transparent border-none outline-none w-full"
              />
              <ChevronDown size={16} className="text-gray-400 cursor-pointer flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Update Button */}
        <button className="h-[54px] px-4 md:px-6 bg-[var(--primoo-yellow)] hover:bg-[var(--primoo-dark)] rounded-md font-semibold text-sm flex-shrink-0 md:w-auto w-full">
          Update
        </button>
      </div>
    </div>
  );
}