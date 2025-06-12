import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import QuizList from './QuizList';
import Quiz from './Quiz';
import NameModal from './NameModal';
import Leaderboard from './Leaderboard';
import quizzes from './data/quizzes';
import questionsData from './data/questions';
import { useEffect } from 'react'; 

function App() {
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [userName, setUserName] = useState('');
  const [pendingQuizId, setPendingQuizId] = useState(null);
  const [showNameModal, setShowNameModal] = useState(false);

  const startQuiz = (quizId) => {
    setPendingQuizId(quizId);
    setShowNameModal(true);
  };

  const startRandomQuiz = () => {
    const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    setPendingQuizId(randomQuiz.id);
    setShowNameModal(true); // ✅ ask for name first
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
    setActiveQuizId(pendingQuizId);
    setShowNameModal(false);
  };

  const quitQuiz = (finalScore = null) => {
    if (finalScore !== null && userName && activeQuizId !== null) {
      const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
      leaderboard.push({
        name: userName,
        score: finalScore,
        quizId: activeQuizId,
        date: new Date().toISOString(),
      });
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }

    setActiveQuizId(null);
    setUserName('');
    setPendingQuizId(null);
  };

  const currentQuestions = questionsData[activeQuizId];

  // Scroll to top when a quiz starts
useEffect(() => {
  if (activeQuizId !== null) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [activeQuizId]);

  return (
    <>
      <Navbar />
      {!activeQuizId ? (
        <>
          <Header
            title="Available Quizzes - Scroll Or Click on the Quizzes button"
            subtitle="Pick one and test yourself!"
          />
          <div id="home">
            <Home onStart={startRandomQuiz} /> {/* ✅ Fixed to use random quiz flow */}
          </div>
          <div id="quizzes">
            <QuizList quizzes={quizzes} onStartQuiz={startQuiz} />
          </div>
          <div id="leaderboard">
            <Leaderboard />
          </div>
                    <div id="about" className="p-6 text-center bg-gray-100 text-gray-700">
            <h2 className="text-2xl font-semibold mb-2">About QuizRush</h2>
            <p>
              This is a simple quiz app built with React and Tailwind CSS
              <br />
              Made with ❤️ by Suryansh Rai
            </p>
          </div>

        </>
      ) : (
        <Quiz questions={currentQuestions} onQuit={quitQuiz} userName={userName} />
      )}

      {showNameModal && (
        <NameModal
          onSubmit={handleNameSubmit}
          onCancel={() => setShowNameModal(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
