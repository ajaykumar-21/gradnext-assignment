import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Features", "Testimonials", "Join Now"];

  return (
    <nav className="bg-white sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          GradNext
        </h1>
        <ul className="hidden md:flex space-x-8 font-semibold  text-gray-700 text-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white text-gray-700 font-semibold text-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block py-2 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
