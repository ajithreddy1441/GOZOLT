import React from "react";
import SearchHeader from "./SearchHeader.jsx";
import CarTypes from "./CarTypes.jsx";

export default function AfterLoader() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SearchHeader />
      <main className="px-4">
        <CarTypes />
      </main>
    </div>
  );
}