import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Plane,
  Settings2,
  X,
  Car,
  Fuel,
  MapPin,
  Settings,
  Building2,
  Users,
  Umbrella,
  Gauge,
  Ban,
  UserPlus,
  CreditCard,
  Wallet,
  Check,
  Info
} from 'lucide-react';

const CarFilterSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    carType: [],
    fuelPolicy: [],
    pickUpLocation: [],
    transmission: [],
    supplier: [],
    seats: [],
    excess: [],
    mileage: [],
    cancellation: [],
    additionalDriver: [],
    debitCard: [],
    deposit: []
  });

  // Corrected supplier data with proper logo filenames
  const supplierLogos = [
    'logo_BGE.png',
    'logo_ECR.png',
    'logo_ALM.png',
    'logo_AVS.png',
    'logo_DTG.png',
    'logo_ENT.png',
    'logo_THR.png',
    'logo_SXT.png',
    'logo_NAT.png',
    'logo_HER.png'
  ];

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setExpandedFilter(null);
  };

  const handleFilterClick = (filterName) => {
    setExpandedFilter(expandedFilter === filterName ? null : filterName);
  };

  const handleOptionSelect = (filterName, option) => {
    setSelectedOptions(prev => {
      const currentOptions = prev[filterName];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(item => item !== option)
        : [...currentOptions, option];
      
      return {
        ...prev,
        [filterName]: newOptions
      };
    });
  };

  const filterOptions = {
    carType: [
      { label: 'Small Cars', price: '$40.97' },
      { label: 'Medium Cars', price: '$40.97' },
      { label: 'Large Cars', price: '$72.97' },
      { label: 'Estate Cars', price: '$90.44' },
      { label: 'SUVs Popular', price: '$72.00' },
      { label: 'People carriers', price: '$97.33' },
      { label: 'Premium', price: '$127.98' }
    ],
    fuelPolicy: [
      { label: 'Full / Empty', price: '$120.54' },
      { label: 'Full / Full Recommended', price: '$54.59' }
    ],
    pickUpLocation: [
      { label: 'On airport', price: '$54.59' },
      { label: 'Free Shuttle', price: '$40.97' }
    ],
    transmission: [
      { label: 'Automatic', price: '$62.35' },
      { label: 'Manual', price: '$40.97' }
    ],
    supplier: supplierLogos.map(logo => ({
      logo,
      label: logo.replace('logo_', '').replace('.png', '').toUpperCase()
    })),
    seats: [
      { label: '7 seats', price: '$192.81' },
      { label: '9 seats', price: '$244.04' }
    ],
    excess: [
      { label: 'Zero Excess', price: '$138.13' },
      { label: 'With Excess', price: '$40.97' }
    ],
    mileage: [
      { label: 'Unlimited', price: '$40.97' }
    ],
    cancellation: [
      { label: 'Free cancellation', price: '$40.97' }
    ],
    additionalDriver: [
      { label: 'Add price of additional driver' }
    ],
    debitCard: [
      { label: 'Accepts Debit Card', price: '$57.76' }
    ],
    deposit: [
      { label: 'Less than $500', price: '$97.14' },
      { label: 'Less than $750', price: '$92.74' }
    ]
  };

  const FilterItem = ({ icon: Icon, label, filterName }) => (
    <div className="border-b">
      <div 
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={() => handleFilterClick(filterName)}
      >
        <div className="flex items-center gap-2 text-[--primoo-dark]">
          <Icon size={18} />
          <span className="font-semibold">{label}</span>
        </div>
        <ChevronDownIcon isExpanded={expandedFilter === filterName} />
      </div>
      
      {expandedFilter === filterName && (
        <div className="px-4 py-2 bg-gray-50">
          {filterOptions[filterName].map((option, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center py-2 px-2 rounded cursor-pointer hover:bg-gray-100
                ${selectedOptions[filterName].includes(option.label) ? 'bg-blue-50' : ''}`}
              onClick={() => handleOptionSelect(filterName, option.label)}
            >
              <div className="flex items-center gap-3">
                <Checkbox checked={selectedOptions[filterName].includes(option.label)} />
                {filterName === 'supplier' ? (
                  <div className="flex items-center gap-2">
                    <img 
                      src={`/prv/${option.logo}`} 
                      alt={option.label} 
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/prv/logo_default.png';
                      }}
                    />
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <span>{option.label}</span>
                )}
              </div>
              {option.price && <span className="text-green-600 font-medium">{option.price}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Checkbox = ({ checked }) => (
    <div className={`w-4 h-4 border rounded flex items-center justify-center 
      ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}
    >
      {checked && <Check size={12} className="text-white" />}
    </div>
  );

  const ChevronDownIcon = ({ isExpanded }) => (
    <svg 
      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      {/* Compact Filters for Mobile & Tablet */}
      <div className="block lg:hidden bg-gray-200 px-1 py-3 rounded-xl shadow md:flex md:items-center md:justify-between">
        <div className="flex text-xs text-[--primoo-dark] font-semibold mb-2 px-1">
          <span className="mr-4">All Filters</span>
          <span>Popular filters</span>
        </div>

        {/* Pill Buttons */}
        <div className="flex flex-wrap">
          <button
            className="flex items-center gap-1 mr-1 px-2 py-1 border rounded-full text-sm text-[--primoo-dark] bg-white shadow-sm"
            onClick={handleToggleModal}
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <button className="flex items-center gap-1 mr-1 px-2 py-1 border rounded-full text-sm text-[--primoo-dark] bg-white shadow-sm">
            <Plane size={14} /> On airport
          </button>
          <button className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm text-[--primoo-dark] bg-white shadow-sm">
            <Settings2 size={14} /> Automatic
          </button>
        </div>
      </div>

      {/* Filter Modal for Mobile */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* Header */}
          <div className="bg-[#04213c] text-white p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button onClick={handleToggleModal}>
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* Filter Categories List */}
          <div className="divide-y">
            <FilterItem icon={Car} label="Car type" filterName="carType" />
            <FilterItem icon={Fuel} label="Fuel Policy" filterName="fuelPolicy" />
            <FilterItem icon={MapPin} label="Pick-up Location" filterName="pickUpLocation" />
            <FilterItem icon={Settings} label="Transmission" filterName="transmission" />
            <FilterItem icon={Building2} label="Choose supplier" filterName="supplier" />
            <FilterItem icon={Users} label="Number of Seats" filterName="seats" />
            <FilterItem icon={Umbrella} label="Excess" filterName="excess" />
            <FilterItem icon={Gauge} label="Mileage" filterName="mileage" />
            <FilterItem icon={Ban} label="Cancellation" filterName="cancellation" />
            <FilterItem icon={UserPlus} label="Additional driver" filterName="additionalDriver" />
            <FilterItem icon={CreditCard} label="Debit Card" filterName="debitCard" />
            <FilterItem icon={Wallet} label="Deposit on Pick-up" filterName="deposit" />
          </div>
        </div>
      )}
      {/* Full Sidebar for Desktop */}
      <div className="hidden lg:block bg-[--primoo-white] border border-[--primoo-grey] rounded-xl p-4 text-sm sticky top-4">
        {/* Advice */}
      <div className="bg-green-100 border-l-4 border-green-600 p-3 mb-4 rounded">
        <p className="text-green-800 font-semibold">Book now</p>
        <p className="text-[--primoo-dark] text-xs">
          Prices are likely to go up the closer you get to your travel date
        </p>
      </div>

      {/* Car Hire Companies */}
<div className="mb-5">
  <div className="flex items-center justify-between mb-2">
    <p className="font-semibold text-[--primoo-dark]">Car hire companies</p>
    <Info size={14} />
  </div>
  <div className="grid grid-cols-2 gap-2">
    {[
      { name: 'Abbycar', code: 'ALM' },
            { name: 'AddCar', code: 'HER' },
            { name: 'Alamo', code: 'ECR' },
            { name: 'Aquarius', code: 'NAT' },
            { name: 'Auto Union', code: 'THR' },
            { name: 'Avis', code: 'AVS' },
            { name: 'Budget', code: 'BGE' },
            { name: 'Cargini', code: 'DTG' },
            { name: 'Carwiz', code: 'HER' },
            { name: 'City', code: 'SXT' },
            { name: 'Enterprise', code: 'ENT' },
            { name: 'Firefly', code: 'ALM' },
            { name: 'Green', code: 'AVS' },
            { name: 'Hertz', code: 'THR' },
            { name: 'Rentacar', code: 'DTG' },
            { name: 'Sicily', code: 'SXT' },
            { name: 'Smart', code: 'NAT' },
            { name: 'Surprice', code: 'ECR' },
            { name: 'Thrifty', code: 'THR' },
            { name: 'Usave', code: 'BGE' }
    ].map((company, idx) => (
      <label key={idx} className="flex items-center gap-2">
        <input type="checkbox" className="accent-[--primoo-yellow]" />
        <img
          src={`/prv/logo_${company.code}.png`}
          alt={company.name}
          className="h-5 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/prv/logo_default.png'; // fallback image
          }}
        />
        <span className="text-xs text-[--primoo-dark]">{company.name}</span>
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
    </>
  );
};

export default CarFilterSidebar;