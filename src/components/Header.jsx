import React, { useState } from "react";
import { Globe, Menu, Phone, X } from "lucide-react";

function Header({ onLanguageChange }) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [, setSelectedLanguage] = useState("English");
  const [currentFlag, setCurrentFlag] = useState("/flat/flag-GB.png");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "/flat/flag-GB.png" },
    { code: "fr", name: "Français", flag: "/flat/flag-FR.png" },
    { code: "de", name: "Deutsch", flag: "/flat/flag-DE.png" },
    { code: "es", name: "Español", flag: "/flat/flag-ES.png" },
    { code: "it", name: "Italiano", flag: "/flat/flag-IT.png" },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setCurrentFlag(language.flag);
    setShowLanguageDropdown(false);
    if (onLanguageChange) {
      onLanguageChange(language.code);
    }
  };

  return (
    <div className="font-sans bg-blue-100">
      <header className="bg-[#04213c] p-4 md:p-5 flex items-center justify-between relative">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f9dd17] rounded-full flex items-center justify-center">
            <span className="text-[#04213c] font-bold text-sm md:text-lg">G</span>
          </div>
          <span className="text-xl md:text-3xl font-bold text-white">GOZOLT</span>
        </div>

        {/* Center text for larger screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white italic">
            <div className="text-lg font-semibold leading-tight">Always Cheaper</div>
            <div className="text-base leading-tight">Guaranteed.</div>
          </div>
        </div>

        {/* Right-side menu icon (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm text-white cursor-pointer hover:text-[#f9dd17]">My Booking</span>
          <Phone size={20} className="text-white" />

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <img
                src={currentFlag}
                alt="flag"
                className="w-5 h-5 rounded-full"
              />
              <Globe className="w-4 h-4 text-white" />
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-5 h-5 mr-2 rounded"
                      />
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md z-40 p-4 md:hidden">
            <div className="flex flex-col gap-4 text-[--primoo-blue]">
              <span className="text-base font-medium border-b pb-2 border-gray-200">My Booking</span>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>Contact Us</span>
              </div>

              {/* Language Selector */}
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-700">Select Language</h4>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageSelect(language);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-5 h-5 mr-2 rounded"
                      />
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
