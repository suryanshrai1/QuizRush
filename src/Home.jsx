import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-6 text-center">
        Welcome to the QuizRush Quiz App
      </h1>
      <p className="text-lg text-white mb-8 max-w-xl text-center">
        Test your knowledge across various topics and challenge yourself with fun quizzes.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-100 transition cursor-pointer"
      >
        Start A Random Quiz
      </button>

    </div>
  );
};

export default Home;
