import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import QuizList from './QuizList';
import Quiz from './Quiz';
import NameModal from './NameModal';
import quizzes from './data/quizzes';
import questionsData from './data/questions';

function App() {
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [userName, setUserName] = useState('');
  const [pendingQuizId, setPendingQuizId] = useState(null);
  const [showNameModal, setShowNameModal] = useState(false);

  const startQuiz = (quizId) => {
    setPendingQuizId(quizId);
    setShowNameModal(true);
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
    setActiveQuizId(pendingQuizId);
    setShowNameModal(false);
  };

  const quitQuiz = () => {
    setActiveQuizId(null);
    setUserName('');
    setPendingQuizId(null);
  };

  const currentQuestions = questionsData[activeQuizId];

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
            <Home onStart={startQuiz} />
          </div>
          <div id="quizzes">
            <QuizList quizzes={quizzes} onStartQuiz={startQuiz} />
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
