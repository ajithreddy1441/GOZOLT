import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function CarDetail() {
  const { state } = useLocation();
  const car = state?.car;
  const navigate = useNavigate();
  const payBtnRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsButtonVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (payBtnRef.current) observer.observe(payBtnRef.current);

    return () => {
      if (payBtnRef.current) observer.unobserve(payBtnRef.current);
    };
  }, []);

  if (!car) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No car details found. Please go back and select a car.</p>
        <button 
          onClick={() => navigate(-1)}
          className="ml-4 bg-[#f9dd17] px-4 py-2 rounded-md"
        >
          Back to cars
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-10 min-h-screen">
      {/* Back Button */}
      <div 
        className="mb-4 text-[--primoo-blue] cursor-pointer flex items-center" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={18} className="mr-2" />
        <span>See all cars</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDEBAR */}
        <div className="lg:w-1/5 w-full sticky top-10 self-start space-y-6">
          {/* Car Info Block */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img 
              src={car.img || '/carHead.png'} 
              alt={car.name} 
              className="w-full rounded-md mb-2" 
            />
            <h2 className="text-xl font-semibold text-[--primoo-dark]">{car.name}</h2>
            <p className="text-sm text-gray-500 mb-3">or similar</p>
            <div className="flex items-center flex-wrap gap-3 text-[--primoo-dark] text-sm mb-4">
              <Users className="w-4 h-4" />
              <span>{car.seats}</span>
              <span>· {car.doors} Doors</span>
              <span>· {car.transmission}</span>
              <span>· A/C</span>
            </div>
            <h4 className="font-semibold text-[--primoo-dark] mb-2">Location</h4>
            <p className="flex items-center text-sm text-gray-700 mb-1">
              <MapPin className="w-4 h-4 mr-2" /> {car.pickup}
            </p>
            <p className="flex items-center text-sm text-gray-700 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              Mon 4 Aug, 10:30
            </p>
            <p className="flex items-center text-sm text-gray-700 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              Thu 7 Aug, 10:30
            </p>
            <p className="text-sm text-gray-500">3 days</p>
          </div>

          {/* Price Summary - shown only when button is not visible */}
          {!isButtonVisible && (
            <div className="bg-white rounded-xl shadow-md p-4 text-sm text-gray-700">
              <h4 className="text-[--primoo-dark] font-semibold mb-2">Price Summary</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Car Rental</span>
                  <span>${car.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pay on Arrival</span>
                  <span>${(car.oldPrice - car.price).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-[--primoo-dark]">
                  <span>Total</span>
                  <span>${car.oldPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Review Section */}
          <div className="bg-white rounded-xl shadow-md p-4 text-sm text-gray-700">
            <h4 className="text-[--primoo-dark] font-semibold mb-2">Customer Reviews</h4>
            <div className="mt-6 text-sm text-gray-700 space-y-1">
              <p>⭐ Trustpilot: 4.1 / 5 (8,637 reviews)</p>
              <p>⭐ Google: 4.1 / 5 (2,324 reviews)</p>
              <p>⭐ eKomi: 4.8 / 5 (35,743 reviews)</p>
            </div>
            <div className="text-center text-xs text-gray-500 mt-4">
              Rated <strong>4.0</strong> / 5 based on <strong>100,897</strong> reviews. Showing our favorite reviews.
              <div className="flex justify-center mt-1">
                <img src="/trustpilot.svg" className="h-4" alt="Trustpilot" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Booking Process Blocks */}
        <div className="w-full space-y-6">
          {/* Booking Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-[--primoo-dark] mb-6">Booking Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-[--primoo-dark] mb-1">PICK-UP</h4>
                <p className="text-sm text-gray-700">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Mon 4 Aug, 2025 - 10:30
                </p>
                <p className="text-sm text-gray-700">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  {car.pickup}
                </p>
                <p className="text-xs text-gray-500">Office hours: Monday 08:00 - 19:00</p>
              </div>

              <div>
                <h4 className="font-semibold text-[--primoo-dark] mb-1">DROP-OFF</h4>
                <p className="text-sm text-gray-700">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Thu 7 Aug, 2025 - 10:30
                </p>
                <p className="text-sm text-gray-700">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  {car.pickup}
                </p>
                <p className="text-xs text-gray-500">Office hours: Thursday 08:00 - 19:00</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4 text-sm text-gray-700 space-y-2">
              <div className="flex justify-between"><span>Car Rental</span><span>${car.price.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Airport Fee</span><span>${(car.oldPrice - car.price).toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-[--primoo-dark]">
                <span>Total</span><span>${car.oldPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">Pay on Arrival: ${(car.oldPrice - car.price).toFixed(2)}</p>
            </div>

            <button ref={payBtnRef} className="w-full bg-[#f9dd17] font-semibold py-3 rounded-md hover:bg-[#f9dd17]/80 transition">
              Pay Online Now – ${car.price.toFixed(2)}
            </button>
          </div>

          {/* Included in Price */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-[--primoo-dark] font-semibold mb-4">Included in the Price</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {car.amendments && (
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> FREE Amendments
                </li>
              )}
              {car.cancel && (
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Cancellation
                </li>
              )}
              {car.insurance && (
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Insurance
                </li>
              )}
              {car.theft && (
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Theft Protection
                </li>
              )}
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Unlimited Mileage
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Local Taxes Included
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Best Price Guaranteed
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> No Credit Card Fees
              </li>
            </ul>
          </div>

          {/* Traveler's Tips */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-[--primoo-dark] font-semibold mb-4">Traveler's Tips</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                The cheapest option in its category in {car.pickup}
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                {car.amendments ? "Free amendments and Free cancellations up to 24 hours before the collection time." : "Standard cancellation policy applies."}
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-9-3a1 1 0 012 0v3a1 1 0 01-2 0V7zm1 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                </svg>
                You're booking one of the last 5 vehicles available at this price from this supplier
              </li>
            </ul>
          </div>

          {/* Extras */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[--primoo-dark] font-semibold text-lg">Extras</h4>
              <button className="text-xl text-gray-500">+</button>
            </div>
          </div>

          {/* Main Driver Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-[--primoo-dark] font-semibold text-lg mb-4">Main Driver Details</h4>

            <div className="flex items-center space-x-6 mb-4 text-sm text-gray-700">
              <label className="flex items-center space-x-1">
                <input type="radio" name="title" value="Mr" className="accent-[--primoo-blue]" />
                <span>Mr</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="title" value="Ms" className="accent-[--primoo-blue]" />
                <span>Ms</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="Surname" className="border border-gray-300 rounded-md px-3 py-2" />
              <input type="email" placeholder="E-mail" className="border border-gray-300 rounded-md px-3 py-2" />
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-md px-2 py-2">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input type="tel" placeholder="Phone Number" className="flex-1 border border-gray-300 rounded-md px-3 py-2" />
              </div>
            </div>

            <div className="text-xs text-green-700 bg-green-100 px-3 py-2 rounded-md mb-4 border border-green-200">
              ℹ️ In case we need to reach you urgently
            </div>

            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 accent-[--primoo-blue]" />
              <span>
                I have read and accept the <a href="#" className="underline">terms and conditions</a> of the booking, legal notice and privacy policy
              </span>
            </label>
          </div>
          {/* Payment Section (New Block) */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-[--primoo-dark] font-semibold text-lg mb-4">Payment Details</h4>
            <div className="text-center mb-4 font-semibold text-lg">Pay Online now: <span className="text-black">$11.76</span></div>

            <div className="space-y-4 max-w-md mx-auto">
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Expiry Date (mm/yy)" className="border border-gray-300 rounded-md px-3 py-2" />
                <input type="text" placeholder="Security Code" className="border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <button className="w-full bg-[#f9dd17]  font-semibold py-3 rounded-md hover:bg-[#f9dd17]/80 transition">Pay Online now</button>

              <div className="text-xs text-center text-gray-500 mt-2">
                <div className="flex justify-center space-x-2 mt-4">
                  <img src="/icons/mastercard.svg" className="h-6" alt="Mastercard" />
                  <img src="/icons/visa.svg" className="h-6" alt="Visa" />
                  <img src="/icons/securecode.svg" className="h-6" alt="SecureCode" />
                  <img src="/icons/norton.svg" className="h-6" alt="Norton" />
                </div>
                <p className="text-green-600 mt-2">No Credit Card Fees</p>
              </div>
            </div>
          </div>

          {/* Reviews Section (New Block) */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold">Very easy process and reas...</p>
                <p>Very easy process and reasonable price, fingers crossed...</p>
                <p className="text-xs text-gray-500 mt-1">Kathryn, 2 days ago</p>
              </div>
              <div>
                <p className="font-semibold">Website easy to use and na...</p>
                <p>Website easy to use and navigate. Plenty of options.</p>
                <p className="text-xs text-gray-500 mt-1">Tina Moore, 2 days ago</p>
              </div>
              <div>
                <p className="font-semibold">Simplicity of the booking p...</p>
                <p>Simplicity of the booking process</p>
                <p className="text-xs text-gray-500 mt-1">Kathy, 2 days ago</p>
              </div>
              <div>
                <p className="font-semibold">Very easy booking and gre...</p>
                <p>Very easy booking and great price!</p>
                <p className="text-xs text-gray-500 mt-1">Robbilee Lumb, 2 days ago</p>
              </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-4">
              Rated <strong>4.0</strong> / 5 based on <strong>100,897</strong> reviews. Showing our favorite reviews.
              <div className="flex justify-center mt-1">
                <img src="/trustpilot.svg" className="h-4" alt="Trustpilot" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarDetail;
