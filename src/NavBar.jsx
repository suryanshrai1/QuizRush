import React from 'react';

const Navbar = ({ isQuizActive }) => {
  const handleNavClick = (e, targetId) => {
    if (isQuizActive) {
      e.preventDefault();
      alert('Please finish or quit the current quiz before navigating.');
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">QuizRush</div>
      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-indigo-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#quizzes" onClick={(e) => handleNavClick(e, 'quizzes')} className="hover:text-indigo-300 transition">
            Quizzes
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-indigo-300 transition cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a href="#leaderboard" onClick={(e) => handleNavClick(e, 'leaderboard')} className="hover:text-indigo-300 transition cursor-pointer">
            Leaderboard
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
