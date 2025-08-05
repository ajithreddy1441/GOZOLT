import React from "react";

function Header() {
  return (
    <div className="font-sans bg-blue-100">
      {/* Header */}
      <header className="bg-[#04213c] p-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="relative">
            <div className="w-10 h-10 bg-[#f9dd17] rounded-full flex items-center justify-center">
              <span className="text-[#04213c] font-bold text-lg">G</span>
            </div>
          </div>
          
          <span className="text-3xl font-bold text-white">GOZOLT</span>
        </div>

        {/* Center - Always Cheaper Guaranteed styled like in image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white italic">
            <div className="text-lg font-semibold leading-tight">Always Cheaper</div>
            <div className="text-base leading-tight">Guaranteed.</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-sm text-white cursor-pointer hover:text-[#f9dd17] transition-colors">My Booking</span>
          <span className="text-xl cursor-pointer">📞</span>
          <span className="text-xl cursor-pointer">🇬🇧</span>
        </div>
      </header>
    </div>
 );
}
export default Header;
