import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DoorOpen, Snowflake, Check, Shield, CircleCheck, ArrowRight, Plus } from 'lucide-react';

const cars = [
  {
    name: 'Peugeot 108',
    seats: 4,
    doors: 5,
    transmission: 'Automatic',
    pickup: 'Free Shuttle',
    mileage: 'Unlimited Mileage',
    fuel: 'Like for like',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 40.27,
    oldPrice: 55.86,
    tag: 'FREE Amendments',
    logo: 'smart',
    img: '/carHead.png',
  },
  {
    name: 'Chevrolet Spark',
    seats: 5,
    doors: 4,
    transmission: 'Manual',
    pickup: 'Free Shuttle',
    mileage: 'Unlimited Mileage',
    fuel: 'Like for like',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 43.49,
    oldPrice: 59.43,
    tag: 'FREE Amendments',
    logo: 'movis',
    promo: 'Free Additional Driver - You Save $34',
    img: '/carHead.png',
  },
  {
    name: 'Hyundai i10',
    seats: 4,
    doors: 5,
    transmission: 'Manual',
    pickup: 'On airport',
    mileage: 'Unlimited Mileage',
    fuel: 'Full/Full',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 52.24,
    oldPrice: 69.16,
    tag: 'No Cancellation Fees',
    logo: 'yours',
    img: '/carHead.png',
  },
  {
    name: 'Hyundai i10',
    seats: 4,
    doors: 5,
    transmission: 'Manual',
    pickup: 'On airport',
    mileage: 'Unlimited Mileage',
    fuel: 'Full/Full',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 47.24,
    oldPrice: 59.16,
    tag: 'No Cancellation Fees',
    logo: 'yours',
    img: '/carHead.png',
  },
  {
    name: 'Hyundai i10',
    seats: 4,
    doors: 5,
    transmission: 'Manual',
    pickup: 'On airport',
    mileage: 'Unlimited Mileage',
    fuel: 'Full/Full',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 72.24,
    oldPrice: 89.16,
    tag: 'No Cancellation Fees',
    logo: 'yours',
    img: '/carHead.png',
  },
  {
    name: 'Hyundai i20',
    seats: 4,
    doors: 5,
    transmission: 'Automatic',
    pickup: 'On airport',
    mileage: 'Unlimited Mileage',
    fuel: 'Full/Full',
    cancel: true,
    theft: true,
    amendments: true,
    insurance: true,
    price: 42.24,
    oldPrice: 59.16,
    tag: 'No Cancellation Fees',
    logo: 'yours',
    img: '/carHead.png',
  },
];

const CarSelect = () => {
  const navigate = useNavigate();

  const handleViewDeal = (car) => {
    navigate('/CarDetail', { state: { car } });
  };

  return (
    <div className="flex flex-col gap-5">
      {cars.map((car, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl bg-white shadow-sm">
          {/* Desktop Layout - hidden on mobile/tablet */}
          <div className="hidden lg:block p-4">
            <div className="flex flex-row gap-4">
              <div className="w-40 flex-shrink-0">
                <img src={car.img} alt={car.name} className="w-full h-auto object-contain" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{car.name} <span className="text-sm font-normal text-gray-500">or similar</span></h2>
                  <img src={`/logos/${car.logo}.png`} className="h-4" alt={car.logo} />
                </div>
                <div className="flex gap-3 text-sm text-gray-700 items-center flex-wrap">
                  <span className="flex items-center gap-1"><Users size={14} /> {car.seats} seats</span>
                  <span className="flex items-center gap-1"><DoorOpen size={14} /> {car.doors} doors</span>
                  <span className="flex items-center gap-1"><Snowflake size={14} /> AC</span>
                  <span className="flex items-center gap-1"><Check size={14} /> {car.transmission}</span>
                </div>
                <ul className="text-sm text-gray-900 space-y-1 mt-2">
                  <li>✈ {car.pickup}</li>
                  <li>✔ {car.mileage}</li>
                  <li>⛽ Fuel Policy: {car.fuel}</li>
                  {car.cancel && <li>✔ Cancellation</li>}
                  {car.theft && <li>✔ Theft Protection</li>}
                  {car.amendments && <li>✔ FREE Amendments</li>}
                  {car.insurance && <li>✔ Full Insurance</li>}
                </ul>
                {car.promo && <p className="text-green-700 text-sm font-medium mt-1">{car.promo}</p>}
              </div>
              <div className="text-right flex flex-col justify-between items-end">
                <div>
                  <p className="text-xl font-bold text-gray-900">${car.price.toFixed(2)}</p>
                  <p className="text-sm text-red-400 line-through">${car.oldPrice.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">Price for 3 days</p>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <span className="bg-yellow-300 text-xs font-bold px-2 py-1 rounded">{car.tag}</span>
                  <button 
                    className="bg-[#f9dd17] hover:bg-[#f9dd17]/80 text-sm font-semibold px-4 py-2 rounded" 
                    onClick={() => handleViewDeal(car)}
                  >
                    View deal
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - hidden on desktop */}
          <div className="lg:hidden">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                 
                  <h2 className="text-lg font-semibold text-gray-900 leading-tight">{car.name}</h2>
                  <p className="text-sm text-gray-500">or similar mini</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Price for 3 days</p>
                  <p className="text-2xl font-bold text-gray-900">${car.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="w-32 h-20 mb-3">
                    <img src={car.img} alt={car.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-600" />
                      <span className="text-gray-800">{car.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check size={14} className="text-gray-600" />
                      <span className="text-gray-800">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">✈</span>
                      <span className="text-gray-800">{car.pickup}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600">♻</span>
                      <span className="text-[#04213c] font-medium">Km: Unlimited</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <button 
                    className="bg-[#f9dd17] hover:bg-[#f9dd17]/80 p-3 rounded-lg transition-colors"
                    onClick={() => handleViewDeal(car)}
                  >
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarSelect;