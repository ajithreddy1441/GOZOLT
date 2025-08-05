import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DoorOpen, Snowflake, Check, Shield, CircleCheck } from 'lucide-react';

const cars = [
  {
    name: 'Peugeot 108',
    seats: 4,
    doors: 5,
    transmission: 'Manual',
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
    img: '/cars/peugeot-108.png',
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
    img: '/cars/chevrolet-spark.png',
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
    img: '/cars/hyundai-i10.png',
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
        <div key={idx} className="border border-[--primoo-grey] rounded-xl p-4 bg-[--primoo-white] shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-40 flex-shrink-0">
              <img src={car.img} alt={car.name} className="w-full h-auto object-contain" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[--primoo-dark]">{car.name} <span className="text-sm font-normal text-gray-500">or similar</span></h2>
                <img src={`/logos/${car.logo}.png`} className="h-4" alt={car.logo} />
              </div>
              <div className="flex gap-3 text-sm text-gray-700 items-center flex-wrap">
                <span className="flex items-center gap-1"><Users size={14} /> {car.seats} seats</span>
                <span className="flex items-center gap-1"><DoorOpen size={14} /> {car.doors} doors</span>
                <span className="flex items-center gap-1"><Snowflake size={14} /> AC</span>
                <span className="flex items-center gap-1"><Check size={14} /> {car.transmission}</span>
              </div>
              <ul className="text-sm text-[--primoo-dark] space-y-1 mt-2">
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
                <p className="text-xl font-bold text-[--primoo-dark]">${car.price.toFixed(2)}</p>
                <p className="text-sm text-red-400 line-through">${car.oldPrice.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Price for 3 days</p>
              </div>
              <div className="mt-2 flex gap-2 items-center">
                <span className="bg-yellow-300 text-xs font-bold px-2 py-1 rounded">{car.tag}</span>
                <button 
                  className="bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-4 py-2 rounded" 
                  onClick={() => handleViewDeal(car)}
                >
                  View deal
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarSelect;