import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-indigo-100 py-6 text-center">
      <h1 className="text-4xl font-semibold text-indigo-700">{title}</h1>
      {subtitle && <p className="mt-2 text-indigo-600 text-lg">{subtitle}</p>}
    </header>
  );
};

export default Header;
