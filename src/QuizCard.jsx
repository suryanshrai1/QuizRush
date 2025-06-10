import React from 'react';

const QuizCard = ({ quiz, onStart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">{quiz.title}</h3>
      <p className="text-gray-600 mb-4">{quiz.description}</p>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Category: {quiz.category}</span>
        <span>Difficulty: {quiz.difficulty}</span>
      </div>
      <button
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer"
        onClick={() => onStart(quiz.id)}
      >
        Start Quiz
      </button>

    </div>
  );
};

export default QuizCard;
