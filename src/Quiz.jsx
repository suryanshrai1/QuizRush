import React, { useState } from 'react';

const Quiz = ({ questions, onQuit, userName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[currentIndex];

  const handleSelect = (option) => {
    if (showAnswer) return;
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
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setIsFinished(false);
  };

  const getOptionClass = (option) => {
    if (!showAnswer) return 'bg-white border-gray-300';
    if (option === current.answer) return 'bg-green-200 border-green-500';
    if (option === selected && option !== current.answer) return 'bg-red-200 border-red-500';
    return 'bg-white border-gray-300 opacity-50';
  };

  if (isFinished) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Quiz Finished!</h2>
        <p className="text-xl mb-6 text-center">
          {userName && <span className="block mb-2 font-medium">Well done, {userName}!</span>}
          You scored <span className="font-semibold">{score}</span> out of{' '}
          <span className="font-semibold">{questions.length}</span>
        </p>

        <div className="space-x-4 mb-4">
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition cursor-pointer"
          >
            Restart Quiz
          </button>
          <button
            onClick={() => onQuit(score)}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
          >
            Quit
          </button>
        </div>

        <button
          onClick={() => {
            onQuit(score);
            setTimeout(() => {
              const leaderboardSection = document.getElementById('leaderboard');
              if (leaderboardSection) {
                leaderboardSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100); // Wait to exit quiz view
          }}
          className="mt-2 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer"
        >
          View Leaderboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        {userName ? `Hi ${userName}, here’s your question:` : `Question ${currentIndex + 1}`}
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

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleNext}
          disabled={!showAnswer}
          className={`px-6 py-2 rounded text-white transition ${showAnswer
              ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          {currentIndex + 1 < questions.length ? 'Next' : 'Finish'}
        </button>

        <button
          onClick={() => onQuit(score)}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
