import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Info, CheckCircle, Star } from 'lucide-react';

// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <img 
          src="loader.gif" 
          alt="Loading..." 
          className="w-64 h-64 mx-auto mb-4" 
        />
        <p className="text-[#25344b] text-lg font-medium">Searching for the best deals...</p>
      </div>
    </div>
  );
}

// AfterLoader Component (placeholder - replace with your actual component)
function AfterLoader() {
  return (
    <div className="bg-[#f6f8fc] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-[#25344b] mb-4">Search Results</h1>
          <p className="text-[#25344b]">Your search results will appear here...</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [activeTab, setActiveTab] = useState('Vans');
  const [sameLocation, setSameLocation] = useState(true);
  const [driverAge, setDriverAge] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchResults] = useState(false);
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tabs = [
    { name: t('tabs.vans'), isNew: false },
    { name: t('tabs.scooters'), isNew: false },
    { name: t('tabs.hotels'), isNew: false },
    { name: 'eSims', isNew: true }
  ];

  const faqs = [
    { question: 'Why are you so cheap?', answer: 'We partner with local providers to offer competitive pricing without compromising quality.' },
    { question: 'Can I choose the fuel policy for my car?', answer: 'Yes, you can select from available fuel policies during booking.' },
    { question: 'Where can I check my booking details?', answer: 'You can view your booking details in your account dashboard or via the confirmation email.' },
    { question: 'How can I pay for my car?', answer: 'We accept credit/debit cards, UPI, and net banking through secure payment gateways.' },
    { question: 'How can I modify or cancel my booking?', answer: 'Log in to your account and navigate to "My Bookings" to modify or cancel.' },
  ];

  const toggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const reviews = [
    {
      title: "Smooth and easy booking",
      content: "The car was ready when we landed and the process was really smooth. Will definitely book again!",
      author: "Ajith R.",
      daysAgo: 2,
    },
    {
      title: "Best prices available",
      content: "Compared to other sites, this one had the best price and no hidden fees.",
      author: "Meena S.",
      daysAgo: 5,
    },
    {
      title: "Excellent support",
      content: "I had a query and their support answered within minutes. Super helpful!",
      author: "John D.",
      daysAgo: 3,
    },
    {
      title: "Great experience",
      content: "Professional service and clean cars. Highly recommended for travelers.",
      author: "Sarah K.",
      daysAgo: 1,
    },
    {
      title: "Value for money",
      content: "Amazing deals and transparent pricing. No surprises at checkout!",
      author: "Mike T.",
      daysAgo: 4,
    },
  ];

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/AfterLoader'); // Navigate to AfterLoader component
    }, 2000);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show search results (AfterLoader component)
  if (showSearchResults) {
    return <AfterLoader />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Background */}
      <div className="relative">
        <div className="absolute inset-0 opacity-50 z-0">
          <img
            src="bg-car.png"
            alt="Car"
            className="w-full h-full object-cover"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#25344b] mb-4">
              All the top car hire companies in one place
            </h1>
            <div className="flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#f9dd17] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-2xl font-bold text-[#f9dd17] italic">
                Book your car in 3 minutes
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all ${
                  activeTab === tab.name 
                    ? 'bg-[#f9dd17] text-[#04213c] border-[#f9dd17]' 
                    : 'bg-white text-[#25344b] border-[#e3e7ee] hover:border-[#f9dd17]'
                }`}
              >
                {tab.name}
                {tab.isNew && <span className="ml-2 text-xs bg-[#04213c] text-white px-2 py-1 rounded-full">New</span>}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 shadow-lg rounded-lg overflow-hidden">
              {/* Pickup Location */}
              <div className="flex items-center bg-white border-r border-gray-200">
                <div className="w-12 h-12 bg-[#f9dd17] flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div className="flex items-center px-4 py-3 flex-1 min-w-0">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="Write your destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full text-sm"
                  />
                </div>
              </div>

              {/* Pickup Date */}
              <div className="flex items-center bg-white border-r border-gray-200">
                <div className="w-12 h-12 bg-[#f9dd17] flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div className="flex items-center px-4 py-3 flex-1 min-w-0">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <div className="flex items-center justify-between w-full">
                    <input
                      type="text"
                      id="pickupDate"
                      name="pickupDate"
                      readOnly
                      value="Fri, 01 Aug"
                      className="text-gray-700 text-sm mr-4 bg-transparent border-none outline-none"
                    />
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="pickupTime"
                        name="pickupTime"
                        readOnly
                        value="10:30"
                        className="text-gray-700 text-sm bg-transparent border-none outline-none w-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Return Date */}
              <div className="flex items-center bg-white border-r border-gray-200">
                <div className="flex items-center px-4 py-3 flex-1 min-w-0">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <div className="flex items-center justify-between w-full">
                    <input
                      type="text"
                      id="returnDate"
                      name="returnDate"
                      readOnly
                      value="Mon, 04 Aug"
                      className="text-gray-700 text-sm mr-4 bg-transparent border-none outline-none"
                    />
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="returnTime"
                        name="returnTime"
                        readOnly
                        value="10:30"
                        className="text-gray-700 text-sm bg-transparent border-none outline-none w-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#f9dd17] hover:bg-[#f9dd17] font-bold px-8 py-3 transition-colors text-lg flex items-center justify-center"
              >
                Search
              </button>
            </div>

            {/* Options */}
            <div className="flex flex-col space-y-3 mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="sameLocation"
                  name="sameLocation"
                  checked={sameLocation}
                  onChange={(e) => setSameLocation(e.target.checked)}
                  className="mr-3 w-4 h-4 text-[#f9dd17] accent-[#f9dd17]"
                />
                <span className="text-sm text-[#25344b] font-medium">Return car to the same location</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="driverAge"
                  name="driverAge"
                  checked={driverAge}
                  onChange={(e) => setDriverAge(e.target.checked)}
                  className="mr-3 w-4 h-4 text-[#f9dd17] accent-[#f9dd17]"
                />
                <span className="text-sm text-[#25344b] font-medium flex items-center">
                  Driver aged between 26 - 69
                  <Info className="w-4 h-4 text-gray-500 ml-2" />
                </span>
              </label>
            </div>

            {/* Best Price Info */}
            <div className="mt-6 text-right">
              <span className="text-lg font-bold text-[#f9dd17]">Best Price Guaranteed</span>
              <div className="text-sm text-[#25344b]">
                Rental Duration: <span className="font-semibold">3 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#25344b] mb-4">
            The cheapest prices in the universe!
          </h2>
          <p className="text-lg text-[#25344b] mb-12 max-w-3xl mx-auto">
            We compare the prices of the top car hire companies in <span className="font-bold text-[#f9dd17]">real time</span> so we can always offer you <span className="font-bold text-[#f9dd17]">the best option</span>
          </p>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
            {['Thrifty', 'Alamo', 'SIXT', 'Europcar', 'AVIS', 'Hertz', 'Enterprise', 'Budget', 'National', 'Dollar'].map((company, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md border border-[#e3e7ee] hover:shadow-lg transition-shadow">
                <span className="text-[#25344b] font-semibold text-sm">{company}</span>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'The best brands in one place', desc: 'Compare the prices' },
              { title: 'No Credit Card Fees', desc: 'Free amendments and cancellations' },
              { title: 'Rated 4.1 out of 5', desc: 'Based on 46000+ independent reviews' }
            ].map((feature, idx) => (
              <div className="text-center bg-[#f6f8fc] p-6 rounded-xl" key={idx}>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#f9dd17]" />
                </div>
                <h3 className="font-bold text-[#25344b] mb-2 text-lg">{feature.title}</h3>
                <p className="text-[#25344b] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-[#f9dd17] mr-2" />
              <span className="text-sm text-[#25344b] font-medium">Trustpilot</span>
            </div>
            <span className="text-sm text-[#25344b] font-medium">eKomi</span>
            <span className="text-sm text-[#25344b] font-medium">Google</span>
          </div>
        </div>
      </div>

      {/* Review Cards */}
      <section className="px-4 py-12 bg-[#f6f8fc]">
        <div className="container mx-auto">
          <div className="relative overflow-x-auto">
            <div className="flex gap-6 min-w-max pb-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-[280px] max-w-[300px] bg-white border border-[#e3e7ee] rounded-lg shadow-md px-6 py-5 hover:shadow-lg transition-shadow"
                >
                  <div className="text-[#f9dd17] font-bold mb-3 text-lg">★★★★★</div>
                  <h3 className="font-semibold text-[#25344b] mb-2">{review.title}</h3>
                  <p className="text-sm text-[#25344b] mb-4 leading-relaxed">{review.content}</p>
                  <div className="text-sm text-gray-600">
                    <strong className="text-[#25344b]">{review.author}</strong>, {review.daysAgo} days ago
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center my-8 text-sm text-[#25344b]">
            Rated <strong className="text-[#f9dd17] text-lg">4.0</strong> / 5 based on{' '}
            <a href="#" className="underline text-[#04213c] font-medium">
              100,645 reviews
            </a>
            . Showing our favourite reviews. <br />
            <span className="text-[#f9dd17] font-semibold">★ Trustpilot</span>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <div className="text-[#04213c] font-bold text-xl">Trustpilot</div>
              <div className="text-[#f9dd17] text-2xl mt-2">★★★★☆</div>
              <p className="text-sm mt-2 text-[#25344b]">
                TrustScore <strong>4.0</strong> | <strong>100,645</strong> reviews
              </p>
            </div>
            <div className="text-center border-l border-[#e3e7ee] px-8">
              <div className="text-[#04213c] font-bold text-xl">eKomi</div>
              <div className="text-[#f9dd17] text-2xl mt-2">★★★★★</div>
              <p className="text-sm mt-2 text-[#25344b]">
                <strong>4.8</strong> / 5
              </p>
            </div>
            <div className="text-center border-l border-[#e3e7ee] px-8">
              <div className="text-[#04213c] font-bold text-xl">Google</div>
              <div className="text-[#f9dd17] text-2xl mt-2">★★★★☆</div>
              <p className="text-sm mt-2 text-[#25344b]">
                <strong>4.1</strong>
              </p>
            </div>
          </div>

          <div className="bg-[#04213c] text-center mt-8 p-6 rounded-xl shadow-lg">
            <span className="text-white mr-2">✨ Try our new AI-based virtual assistant!</span>
            <a href="#" className="text-[#f9dd17] font-semibold underline hover:text-white transition-colors">
              Click here
            </a>
            <span className="text-white"> and get your questions answered.</span>
          </div>
        </div>
      </section>

      {/* Most Popular Destinations */}
<section className="bg-white px-4 py-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-[#25344b] border-b-4 border-[#f9dd17] inline-block mb-10">
      Most Popular Destinations
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {[
        { name: 'Albania', code: 'AL' },
        { name: 'Andorra', code: 'AD' },
        { name: 'Australia', code: 'AU' },
        { name: 'Austria', code: 'AT' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Bosnia and Herzegovina', code: 'BA' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Croatia', code: 'HR' },
        { name: 'Cyprus', code: 'CY' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Egypt', code: 'EG' },
        { name: 'Estonia', code: 'EE' },
        { name: 'Finland', code: 'FI' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'Greece', code: 'GR' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Iceland', code: 'IS' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Israel', code: 'IL' },
        { name: 'Italy', code: 'IT' },
        { name: 'Jordan', code: 'JO' },
        { name: 'Latvia', code: 'LV' },
        { name: 'Lithuania', code: 'LT' },
        { name: 'Luxembourg', code: 'LU' },
        { name: 'Malta', code: 'MT' },
        { name: 'Montenegro', code: 'ME' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Norway', code: 'NO' },
        { name: 'Poland', code: 'PL' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Qatar', code: 'QA' },
        { name: 'Romania', code: 'RO' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'Serbia', code: 'RS' },
        { name: 'Slovakia', code: 'SK' },
        { name: 'Slovenia', code: 'SI' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'Spain', code: 'ES' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Tunisia', code: 'TN' },
        { name: 'Turkey', code: 'TR' },
        { name: 'United Arab Emirates', code: 'AE' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'United States', code: 'US' }
      ].map((country, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 border border-[#e3e7ee] px-4 py-3 rounded-lg bg-white shadow-sm hover:bg-[#f6f8fc] hover:border-[#f9dd17] transition-all cursor-pointer"
        >
          <img 
            src={`/flat/flag-${country.code}.png`} 
            alt={`${country.name} flag`} 
            className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/flags/flag-default.png'; // fallback image
            }}
          />
          <span className="text-sm text-[#25344b] font-medium">{country.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQS */}
      <div className="max-w mx-38">
        <h2 className="text-2xl font-bold mb-6">General questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 p-3 my-1 bg-gray-300">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-left w-full text-left text-lg font-medium"
            >
              {faq.question}
              <span className="text-2xl px-2">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
        <div className="mt-6 text-sm text-gray-500">
          More questions? Check out our <a href="#" className="text-blue-600 underline">full FAQ</a> or <a href="#" className="text-blue-600 underline">get in touch</a>.
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Top Left Block */}
            <div className="md:col-span-2">
              <img src="beach.jpg" alt="Beach scene" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h2 className="text-2xl font-bold text-[#25344b] mb-4">Hassle Free Car Hire: your comparison site</h2>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                We offer top quality cars combined with low cost prices and the guarantee of paying only what you are quoted!<br />
                <strong className="text-[#f9dd17]">Car rental</strong> has never been so <strong className="text-[#f9dd17]">quick and simple</strong>!
              </p>
              <p className="text-[#25344b] leading-relaxed">
                We serve thousands of satisfied customers every year. We have compiled a list of brief customer quotes. Many praise our honest approach, but the majority thank us for our outstanding customer service. Thank you!
              </p>
            </div>

            {/* Top Right Block */}
            <div>
              <img src="family-car.jpg" alt="Family Car" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-[#25344b] border-b-4 border-[#f9dd17] inline-block mb-4">Why are we so cheap?</h3>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                Our prices are so economical because thousands of people book with us every day. And because we have so many bookings, you can <strong className="text-[#f9dd17]">get your car cheaper</strong> with us than anywhere else.
              </p>
              <p className="text-[#25344b] leading-relaxed">
                We specialise in saving you money. Use our <strong className="text-[#f9dd17]">cheap car hire</strong> and enjoy wonderful holidays.
              </p>
            </div>
          </div>

          {/* Bottom Grid Blocks */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="camp.avif" alt="Peace of Mind" className="w-full h-48 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-[#25344b] mb-4">Car hire with 100% Peace of Mind</h3>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                <strong className="text-[#f9dd17]">Cheap Car hire</strong> should not be a question of luck!
              </p>
              <p className="text-[#25344b] leading-relaxed">
                <strong className="text-[#f9dd17]">Car hire</strong> can sometimes be very complicated and full of hidden costs. Our approach is simple: <strong className="text-[#f9dd17]">Our car rental comparison site compares prices</strong> and you save money. And we look after you, every step of the way.
              </p>
            </div>

            <div>
              <img src="with-car.jpg" alt="Advantages" className="w-full h-48 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-[#25344b] mb-4">The Advantages of booking with us</h3>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                Transparent pricing and excellent customer service is what makes us stand out. And that's why thousands of customers use us to search for their <strong className="text-[#f9dd17]">car hire</strong> every year:
              </p>
              <ul className="space-y-2 text-[#25344b]">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#f9dd17] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Friendly, personal service before, during and after your rental</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#f9dd17] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Offices in the airport arrivals hall</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#f9dd17] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Cheapest prices guaranteed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#f9dd17] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Quick and easy to book</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#f9dd17] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">No credit card fees</span>
                </li>
              </ul>
            </div>

            <div>
              <img src="in-car.jpeg" alt="Specialists" className="w-full h-48 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-[#25344b] mb-4">The Car Rental Specialists</h3>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                <strong className="text-[#f9dd17]">Your Car Rental Comparison site.</strong>
              </p>
              <p className="text-[#25344b] mb-4 leading-relaxed">
                With just one search, we'll find you the cheapest prices of all the car hire companies.
              </p>
              <p className="text-[#25344b] leading-relaxed">
                <strong className="text-[#f9dd17]">Carjet is your smart price comparison site.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;