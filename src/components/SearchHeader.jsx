import React, { useState } from "react";
import { Calendar, Clock, ChevronDown, MapPin, X } from "lucide-react";
import dayjs from "dayjs";

export default function BookingForm() {
  const [location, setLocation] = useState("Malta Airport (MLA)");
  const [pickupDate, setPickupDate] = useState("2025-08-08T10:00");
  const [returnDate, setReturnDate] = useState("2025-08-11T10:00");
  const [showPickupTimeDropdown, setShowPickupTimeDropdown] = useState(false);
  const [showReturnTimeDropdown, setShowReturnTimeDropdown] = useState(false);
  const [showSummary, setShowSummary] = useState(false); // summary toggle

  const clearLocation = () => setLocation("");

  const getDaysBetween = () => {
    const diff = dayjs(returnDate).diff(dayjs(pickupDate), "day");
    return diff > 0 ? diff : 0;
  };

  const generateTimeOptions = () => {
    return Array.from({ length: 24 }, (_, i) =>
      `${(i + 1).toString().padStart(2, "0")}:00`
    );
  };

  const handleTimeChange = (time, isPickup) => {
    const datePart = isPickup ? pickupDate.split("T")[0] : returnDate.split("T")[0];
    const newDateTime = `${datePart}T${time}`;
    isPickup ? setPickupDate(newDateTime) : setReturnDate(newDateTime);
    isPickup ? setShowPickupTimeDropdown(false) : setShowReturnTimeDropdown(false);
  };

  return (
    <div className="bg-gray-200 py-4 px-4 md:px-6 lg:px-10 w-full">
      {/* ✅ Summary view for Mobile & Tablet (after Search clicked) */}
      {showSummary && (
        <div className="flex lg:hidden flex-col bg-white rounded-xl p-4 shadow-md relative">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowSummary(false)}
          >
            <X size={20} />
          </button>

          {/* Title + Duration */}
          <div className="mb-2">
            <h2 className="font-bold text-gray-800">{location}</h2>
            <p className="text-sm text-gray-500">
              {dayjs(pickupDate).format("D MMM, HH:mm")} - {dayjs(returnDate).format("D MMM, HH:mm")}
            </p>
          </div>

          {/* Destination Field */}
          <div className="flex items-center border rounded-md px-3 py-2 mb-3 bg-gray-50">
            <MapPin size={18} className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Write your destination"
              value=""
              disabled
              className="w-full text-sm bg-transparent text-gray-600 outline-none"
            />
          </div>

          {/* Dates & Times */}
          <div className="flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50 mb-2">
            <div>
              <p className="text-xs text-gray-500">Pick Up Date:</p>
              <p className="text-sm font-semibold">{dayjs(pickupDate).format("ddd, MMM DD")}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Time:</p>
              <p className="text-sm font-semibold">{pickupDate.split("T")[1].slice(0, 5)}</p>
            </div>
          </div>

          <div className="flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50 mb-3">
            <div>
              <p className="text-xs text-gray-500">Return Date:</p>
              <p className="text-sm font-semibold">{dayjs(returnDate).format("ddd, MMM DD")}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Time:</p>
              <p className="text-sm font-semibold">{returnDate.split("T")[1].slice(0, 5)}</p>
            </div>
          </div>

          
        </div>
      )}

      {/* ✅ Compact summary header (before Search) */}
      {!showSummary && (
        <div className="flex lg:hidden items-center justify-between bg-white px-4 py-2 rounded-full shadow-md w-full">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.5 19.5L20 12 2.5 4.5v5l15 2.5-15 2.5v5z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm text-gray-800">{location}</span>
              <span className="text-xs text-gray-600">
                {dayjs(pickupDate).format("D MMM, HH:mm")} - {dayjs(returnDate).format("D MMM, HH:mm")}
              </span>
            </div>
          </div>

          {/* ✅ Purple circular search button (works only here) */}
          <div
            onClick={() => setShowSummary(true)}
            className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-[#04213c] text-[#04213c] hover:bg-purple-50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 17a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </div>
        </div>
      )}

      {/* ✅ Full desktop form (not affected by Search/Update) */}
      <div className="hidden lg:flex max-w-screen-2xl mx-auto flex-col md:flex-row gap-3 w-full mt-4">
        {/* Location */}
        <div className="flex-1 flex items-center border border-gray-200 bg-white px-4 py-2 rounded-md h-[54px] min-w-0 relative">
          <MapPin className="text-yellow-500 mr-2" size={20} />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-semibold text-sm md:text-base">Pick-up Location</span>
            <span className="font-bold text-gray-800 text-xs md:text-sm truncate">
              {location || "Select location"}
            </span>
          </div>
          {location && (
            <button onClick={clearLocation} className="absolute right-3 text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Date/Time Container */}
        <div className="flex flex-col md:flex-row gap-3 items-center">
          {/* Pickup Date + Time */}
          <div className="flex items-center border border-gray-200 bg-white rounded-md h-[54px] px-3 min-w-0 relative w-auto shrink-0">
            <Calendar size={16} className="text-gray-500 mr-2 flex-shrink-0" />
            <div className="flex flex-col pr-3 min-w-0">
              <span className="text-xs text-gray-500">Pick Up</span>
              <input
                type="date"
                value={pickupDate.split("T")[0]}
                onChange={(e) => setPickupDate(e.target.value + "T" + pickupDate.split("T")[1])}
                className="text-sm font-semibold text-gray-800 bg-transparent border-none outline-none w-full"
              />
            </div>
            <div className="border-l h-[70%] mx-2" />
            <div className="flex items-center gap-1 min-w-0 relative">
              <Clock size={16} className="text-gray-500 flex-shrink-0" />
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShowPickupTimeDropdown(!showPickupTimeDropdown)}
              >
                <span className="text-sm font-semibold text-gray-800">
                  {pickupDate.split("T")[1].substring(0, 5)}
                </span>
                <ChevronDown size={16} className="text-gray-400 ml-1" />
              </div>
              {showPickupTimeDropdown && (
                <div className="absolute left-8 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10 max-h-60 overflow-y-auto w-20">
                  {generateTimeOptions().map((time) => (
                    <div
                      key={time}
                      onClick={() => handleTimeChange(time, true)}
                      className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Duration Badge */}
          <div className="hidden md:flex flex-col items-center justify-center h-[54px] w-[54px] rounded-full bg-white border border-gray-200 text-center flex-shrink-0 mx-2">
            <span className="text-gray-800 font-bold text-base">{getDaysBetween()}</span>
            <span className="text-xs text-gray-500">days</span>
          </div>

          {/* Return Date + Time */}
          <div className="flex items-center border border-gray-200 bg-white rounded-md h-[54px] px-3 min-w-0 relative w-auto min-w-max shrink-0">
            <Calendar size={16} className="text-gray-500 mr-2 flex-shrink-0" />
            <div className="flex flex-col pr-3 min-w-0">
              <span className="text-xs text-gray-500">Return</span>
              <input
                type="date"
                value={returnDate.split("T")[0]}
                onChange={(e) => setReturnDate(e.target.value + "T" + returnDate.split("T")[1])}
                className="text-sm font-semibold text-gray-800 bg-transparent border-none outline-none w-full"
              />
            </div>
            <div className="border-l h-[70%] mx-2" />
            <div className="flex items-center gap-1 min-w-0 relative">
              <Clock size={16} className="text-gray-500 flex-shrink-0" />
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShowReturnTimeDropdown(!showReturnTimeDropdown)}
              >
                <span className="text-sm font-semibold text-gray-800">
                  {returnDate.split("T")[1].substring(0, 5)}
                </span>
                <ChevronDown size={16} className="text-gray-400 ml-1" />
              </div>
              {showReturnTimeDropdown && (
                <div className="absolute left-8 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10 max-h-60 overflow-y-auto w-20">
                  {generateTimeOptions().map((time) => (
                    <div
                      key={time}
                      onClick={() => handleTimeChange(time, false)}
                      className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop-only Update button (does NOT trigger summary) */}
        <button className="h-[54px] px-6 bg-[var(--primoo-yellow)] hover:bg-[#f9dd17]/80 rounded-md font-semibold text-sm">
          Update
        </button>
      </div>
    </div>
  );
}
