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
  Check
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
              {option.price && <span className="text-blue-600 font-medium">{option.price}</span>}
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
    </>
  );
};

export default CarFilterSidebar;