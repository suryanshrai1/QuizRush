import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">QuizApp</div>
      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <a href="#home" className="hover:text-indigo-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#quizzes" className="hover:text-indigo-300 transition">
            Quizzes
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-300 transition">
            About
          </a>
        </li>
      </ul>
      {/* Mobile menu button (optional, you can implement if needed) */}
    </nav>
  );
};

export default Navbar;
