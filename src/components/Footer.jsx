import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">{/* Your content */}</main>
    <footer className="bg-gray-100 text-gray-700 text-sm border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Help Section */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:underline">Customer Reviews</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* CarJet Section */}
        <div>
          <h3 className="font-semibold mb-3">CarJet</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookies Policy</a></li>
            <li><a href="#" className="hover:underline">Legal Note</a></li>
            <li><a href="#" className="hover:underline">Conditions Employment</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Fleet</a></li>
            <li><a href="#" className="hover:underline">Suppliers</a></li>
            <li><a href="#" className="hover:underline">Vans</a></li>
            <li><a href="#" className="hover:underline">Scooters</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Quote & Security Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold mb-3">Get your Quote for Car Hire</h3>
            <p className="text-xs text-gray-500">
              © 2025 CarJet.com. All rights reserved. CarJet SL, C/Alcalde Juan Evora Suárez, 29600 Marbella, Spain.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <img src="/norton.png" alt="Norton Secured" className="h-8" />
            <img src="/digicert.png" alt="Digicert Secure" className="h-8" />
          </div>
        </div>
      </div>

      {/* Country Flags */}
      <div className="bg-gray-200 py-4 text-center text-xs text-gray-600">
        🌍 Available in: 🇪🇸 🇫🇷 🇮🇹 🇩🇪 🇬🇧 🇺🇸 🇮🇳 🇯🇵 🇧🇷 🇨🇦
      </div>
    </footer>
    </div>
    );
    }
export default Footer;