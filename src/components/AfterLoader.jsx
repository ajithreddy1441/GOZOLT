import React from "react";
import SearchHeader from "./SearchHeader.jsx";
import CarTypes from "./CarTypes.jsx";

export default function AfterLoader() {
  return (
    <div className="min-h-screen bg-[--primoo-bg]">
      <SearchHeader />
      <main className="container mx-auto px-4 py-6">
        <CarTypes />
      </main>
    </div>
  );
}