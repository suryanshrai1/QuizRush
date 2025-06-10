import React, { useState } from 'react';

const Quiz = ({ questions, onQuit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const current = questions[currentIndex];

  const handleNext = () => {
    if (selected === current.answer) setScore(score + 1);
    setSelected(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Quiz Finished! You scored ${score + (selected === current.answer ? 1 : 0)} out of ${questions.length}`);
      onQuit();
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Question {currentIndex + 1}</h2>
      <p className="mb-6 text-lg">{current.question}</p>
      
      <div className="space-y-4 mb-6">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`w-full px-4 py-2 rounded border text-left cursor-pointer ${
              selected === opt ? 'bg-indigo-200 border-indigo-500' : 'bg-white border-gray-300'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className={`px-6 py-2 rounded text-white transition ${
          selected
            ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {currentIndex + 1 < questions.length ? 'Next' : 'Finish'}
      </button>

      <button
        onClick={onQuit}
        className="ml-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
      >
        Quit
      </button>
    </div>
  );
};

export default Quiz;
