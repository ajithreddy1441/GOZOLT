import React from 'react';
import Filter from './Filter.jsx';
import CarSelect from './CarSelect.jsx';

const carTypes = [
  { label: 'Small Cars', price: '$40.27', image: '/cars/small.png' },
  { label: 'Medium Cars', price: '$40.27', image: '/cars/medium.png' },
  { label: 'Large Cars', price: '$71.71', image: '/cars/large.png' },
  { label: 'Estate Cars', price: '$88.88', image: '/cars/estate.png' },
  { label: 'SUVs', price: '$70.76', image: '/cars/suv.png' },
  { label: 'People carriers', price: '$95.66', image: '/cars/people.png' },
  { label: 'Premium', price: '$125.32', image: '/cars/premium.png' },
];

function CarTypes() {
  return (
    <div className="bg-[--primoo-bg]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Filter Component */}
        <div className="w-full lg:w-1/4">
          <Filter />
        </div>

        {/* Right: Car Type Cards and CarSelect Component */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* Car type cards - now without surrounding box */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {carTypes.map((car, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-md transition-all duration-200 ease-in-out p-3 text-center border border-[--primoo-grey] hover:border-yellow-400"
              >
                <h3 className="text-[--primoo-dark] font-medium text-xs mb-2 line-clamp-2 h-10 flex items-center justify-center">
                  {car.label}
                </h3>
                <img
                  src="carHead.png"
                  alt={car.label}
                  className="mx-auto h-14 object-contain"
                />
                <div className="text-[10px] text-[--primoo-dark] mt-2">from</div>
                <div className="font-bold text-[--primoo-blue] text-sm">{car.price}</div>
              </div>
            ))}
          </div>

          {/* CarSelect component below car types */}
          <CarSelect />
        </div>
      </div>
    </div>
  );
}

export default CarTypes;