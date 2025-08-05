import React, { useState } from "react";
import { Globe, Menu, Phone, X } from "lucide-react";

function Header({ onLanguageChange }) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [, setSelectedLanguage] = useState("English");
  const [currentFlag, setCurrentFlag] = useState("🇬🇧");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "it", name: "Italian", flag: "🇮🇹" },
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
      {/* Header */}
      <header className="bg-[#04213c] p-4 md:p-5 flex items-center justify-between relative">
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo and brand */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="relative">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f9dd17] rounded-full flex items-center justify-center">
              <span className="text-[#04213c] font-bold text-sm md:text-lg">G</span>
            </div>
          </div>
          
          <span className="text-xl md:text-3xl font-bold text-white">GOZOLT</span>
        </div>

        {/* Center - Always Cheaper Guaranteed - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white italic">
            <div className="text-lg font-semibold leading-tight">Always Cheaper</div>
            <div className="text-base leading-tight">Guaranteed.</div>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm text-white cursor-pointer hover:text-[#f9dd17] transition-colors">
            My Booking
          </span>
          <span className="text-xl cursor-pointer text-white"><Phone size={20} /></span>
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span className="text-xl">{currentFlag}</span>
              <Globe className="w-4 h-4 text-white" />
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center"
                    >
                      <span className="text-lg mr-2">{language.flag}</span>
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile icons (phone and language) */}
        <div className="flex md:hidden items-center space-x-4">
          <span className="text-xl cursor-pointer text-white"><Phone size={20} /></span>
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span className="text-xl">{currentFlag}</span>
              <Globe className="w-4 h-4 text-white" />
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center"
                    >
                      <span className="text-lg mr-2">{language.flag}</span>
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#04213c] py-4 px-4 shadow-lg z-40">
            <div className="flex flex-col space-y-4">
              <span className="text-white cursor-pointer hover:text-[#f9dd17] transition-colors py-2 border-b border-gray-700">
                My Booking
              </span>
              
              {/* Language options expanded in mobile menu */}
              <div className="pt-2">
                <h4 className="text-white text-sm uppercase tracking-wider mb-2">Select Language</h4>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageSelect(language);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center px-3 py-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-700"
                    >
                      <span className="text-lg mr-2">{language.flag}</span>
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