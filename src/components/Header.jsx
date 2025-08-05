import React, { useState } from "react";
import { Globe } from "lucide-react";

function Header({ onLanguageChange }) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [currentFlag, setCurrentFlag] = useState("🇬🇧");

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
      onLanguageChange(language.code); // Pass the language code to parent component
    }
  };

  return (
    <div className="font-sans bg-blue-100">
      {/* Header */}
      <header className="bg-[#04213c] p-5 flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="relative">
            <div className="w-10 h-10 bg-[#f9dd17] rounded-full flex items-center justify-center">
              <span className="text-[#04213c] font-bold text-lg">G</span>
            </div>
          </div>
          
          <span className="text-3xl font-bold text-white">GOZOLT</span>
        </div>

        {/* Center - Always Cheaper Guaranteed */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white italic">
            <div className="text-lg font-semibold leading-tight">Always Cheaper</div>
            <div className="text-base leading-tight">Guaranteed.</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-white cursor-pointer hover:text-[#f9dd17] transition-colors">
            My Booking
          </span>
          <span className="text-xl cursor-pointer">📞</span>
          
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
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
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
      </header>
    </div>
  );
}

export default Header;