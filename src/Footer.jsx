import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4 mt-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} QuizApp. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#privacy" className="hover:text-indigo-300 transition">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:text-indigo-300 transition">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
