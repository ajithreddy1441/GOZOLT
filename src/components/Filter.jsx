import React from 'react';
import { Info } from 'lucide-react';

const companies = [
  'abbycar', 'addCar', 'alamo', 'aquarius', 'autounion', 'avis', 'budget',
  'cargini', 'carwiz', 'city', 'enterprise', 'firefly', 'green', 'hertz',
  'movis', 'national', 'nexcar', 'rentacar', 'routes', 'sicily', 'smart',
  'surprice', 'thrifty', 'usave', 'wheego', 'yours'
];

const CarFilterSidebar = () => {
  return (
    <div className="bg-[--primoo-white] border border-[--primoo-grey] rounded-xl p-4 text-sm sticky top-4">
      {/* Advice */}
      <div className="bg-green-100 border-l-4 border-green-600 p-3 mb-4 rounded">
        <p className="text-green-800 font-semibold">Book now</p>
        <p className="text-[--primoo-dark] text-xs">
          Prices are likely to go up the closer you get to your travel date
        </p>
      </div>

      {/* Rest of your filter content remains the same */}
      {/* Car Hire Companies */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-[--primoo-dark]">Car hire companies</p>
          <Info size={14} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {companies.map((name, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input type="checkbox" className="accent-[--primoo-yellow]" />
              <img
                src={`/logos/${name}.png`}
                alt={name}
                className="h-5 object-contain"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Pick-up Location */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Pick-up Location</p>
          <Info size={14} />
        </div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          On airport <span className="float-right text-[--primoo-dark]">$49.17</span>
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Free Shuttle <span className="float-right text-[--primoo-dark]">$40.27</span>
        </label>
      </div>

      {/* Fuel Policy */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Fuel Policy</p>
          <Info size={14} />
        </div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Full/Empty <span className="float-right text-[--primoo-dark]">$118.46</span>
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Full/Full <span className="float-right text-[--primoo-yellow] font-semibold">$42.62</span>
          <span className="ml-1 text-[--primoo-yellow] text-xs font-medium">(Recommended)</span>
        </label>
      </div>

      {/* Transmission */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Transmission</p>
          <Info size={14} />
        </div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Automatic
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Manual
        </label>
      </div>

      {/* Additional driver */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Additional driver</p>
          <Info size={14} />
        </div>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Add price of additional driver
        </label>
      </div>

      {/* Debit Card */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Debit Card</p>
          <Info size={14} />
        </div>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Accepts Debit Card <span className="float-right text-[--primoo-dark]">$49.17</span>
        </label>
      </div>

      {/* Deposit on Pick-up */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Deposit on Pick-up</p>
          <Info size={14} />
        </div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Less than $500 <span className="float-right text-[--primoo-dark]">$96.46</span>
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Less than $750 <span className="float-right text-[--primoo-dark]">$91.14</span>
        </label>
      </div>

      {/* Cancellation */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Cancellation</p>
          <Info size={14} />
        </div>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          Free cancellation <span className="float-right text-[--primoo-dark]">$40.27</span>
        </label>
      </div>

      {/* Number of Seats */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[--primoo-dark]">Number of Seats</p>
          <Info size={14} />
        </div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          7 seats <span className="float-right text-[--primoo-dark]">$189.49</span>
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2 accent-[--primoo-yellow]" />
          9 seats <span className="float-right text-[--primoo-dark]">$239.84</span>
        </label>
      </div>

      {/* Review Section */}
      <hr className="my-4" />
      <p className="font-semibold text-[--primoo-dark] mb-2">What people say about us</p>
      <div className="border rounded-lg p-3 relative bg-[--primoo-bg]">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="/icons/star-green.png" alt="star" className="h-4" />
          ))}
        </div>
        <p className="font-semibold text-[--primoo-dark] text-sm">Very easy process and ...</p>
        <p className="text-xs text-[--primoo-dark]">
          Very easy process and reasonable price, fingers crossed that it is as good as...
        </p>
        <p className="text-xs text-[--primoo-dark] mt-2 font-medium">Kathryn, 2 days ago</p>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button className="text-[--primoo-dark]">&larr;</button>
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button className="text-[--primoo-dark]">&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default CarFilterSidebar;