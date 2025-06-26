import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import QuizList from './QuizList';
import Quiz from './Quiz';
import NameModal from './NameModal';
import Leaderboard from './Leaderboard';
import quizzes from './data/quizzes';
import questionsData from './data/questions';

function App() {
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [userName, setUserName] = useState('');
  const [pendingQuizId, setPendingQuizId] = useState(null);
  const [showNameModal, setShowNameModal] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const startQuiz = (quizId) => {
    if (activeQuizId !== null) {
      alert('Please finish or quit the current quiz before starting a new one.');
      return;
    }
    setPendingQuizId(quizId);
    setShowNameModal(true);
  };

  const startRandomQuiz = () => {
    if (activeQuizId !== null) {
      alert('Please finish or quit the current quiz before starting a new one.');
      return;
    }
    const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    setPendingQuizId(randomQuiz.id);
    setShowNameModal(true);
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
    setActiveQuizId(pendingQuizId);
    setShowNameModal(false);
    setIsQuizFinished(false); // Reset flag when starting new quiz
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
    setIsQuizFinished(true);
  };

  const currentQuestions = questionsData[activeQuizId];

  useEffect(() => {
    if (activeQuizId !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeQuizId]);

  return (
    <>
      <Navbar isQuizActive={activeQuizId !== null && !isQuizFinished} />
      {!activeQuizId ? (
        <>
          <Header
            title="Available Quizzes-"
            subtitle="Scroll Or Click on the Quizzes button above-Pick one and test yourself!"
          />
          <div id="home">
            <Home onStart={startRandomQuiz} />
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
