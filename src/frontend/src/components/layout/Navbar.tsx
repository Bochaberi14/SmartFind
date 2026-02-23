import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent cursor-pointer">
          SmartFind
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium">

          <li>
            <Link
              to="/buy"
              className="cursor-pointer text-gray-700 hover:text-indigo-600 transition"
            >
              Buy
            </Link>
          </li>

          <li>
            <Link
              to="/sell"
              className="cursor-pointer text-gray-700 hover:text-indigo-600 transition"
            >
              Sell
            </Link>
          </li>

          <li>
            <Link
              to="/rent"
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              Rent
            </Link>
          </li>

          <li>
            <Link
              to="/find-agency"
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              Find an Agency
            </Link>
          </li>

          <li>
            <ScrollLink
              to="features"
              smooth
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 transition"
            >
              Features
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="pricing"
              smooth
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              Pricing
            </ScrollLink>
          </li>
        </ul>

        {/* Desktop Buttons (UNCHANGED) */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:opacity-90 transition">
            Sign Up
          </button>

          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition">
            Post Property
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link
            to="/buy"
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Buy
          </Link>

          <Link
            to="/sell"
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Sell
          </Link>

          <Link
            to="/rent"
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Rent
          </Link>

          <Link
            to="/find-agency"
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Find an Agency
          </Link>

          <ScrollLink
            to="features"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Features
          </ScrollLink>

          <ScrollLink
            to="pricing"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Pricing
          </ScrollLink>

          {/* Mobile Buttons (UNCHANGED) */}
          <div className="pt-4 space-y-3">
            <button className="w-full py-3 rounded-lg border border-indigo-500 text-indigo-600">
              Login
            </button>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              Sign Up
            </button>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              Post Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
