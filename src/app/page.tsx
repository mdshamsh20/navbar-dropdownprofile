"use client";
import { useState } from 'react';
import Link from 'next/link';
  

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Correct usage of <Link> without <a> */}
        <Link href="/" className="text-white text-2xl font-bold">MyApp</Link>

        <div className="flex items-center space-x-6">
          {/* Correct usage of <Link> without <a> */}
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative z-10 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
            >
              <img
                className="h-full w-full object-cover"
                src="/favicon.ico" // Replace with your profile image path
                alt="Your Profile"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                {/* Correct usage of <Link> without <a> */}
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => alert('Logged out')}
                >
                  Logout
                </button>
              </div>
            )}
            {dropdownOpen && (
              <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdownOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
