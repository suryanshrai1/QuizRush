import React, { useState } from 'react';

const Quiz = ({ questions, onQuit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const current = questions[currentIndex];

  const handleSelect = (option) => {
    if (showAnswer) return; // prevent changing selection after answer shown
    setSelected(option);
    setShowAnswer(true);

    if (option === current.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Quiz Finished! You scored ${score} out of ${questions.length}`);
      onQuit();
    }
  };

  const getOptionClass = (option) => {
    if (!showAnswer) {
      return 'bg-white border-gray-300';
    }
    if (option === current.answer) {
      return 'bg-green-200 border-green-500';
    }
    if (option === selected && option !== current.answer) {
      return 'bg-red-200 border-red-500';
    }
    return 'bg-white border-gray-300 opacity-50'; // dim unselected options after answer shown
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Question {currentIndex + 1}
      </h2>
      <p className="mb-6 text-lg">{current.question}</p>

      <div className="space-y-4 mb-6">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt)}
            disabled={showAnswer}
            className={`w-full px-4 py-2 rounded border text-left cursor-pointer ${getOptionClass(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!showAnswer}
        className={`px-6 py-2 rounded text-white transition ${
          showAnswer
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
