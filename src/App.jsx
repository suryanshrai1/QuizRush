import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import QuizList from './QuizList';
import Quiz from './Quiz';
import quizzes from './data/quizzes';
import questionsData from './data/questions';

function App() {
  const [activeQuizId, setActiveQuizId] = useState(null);

  const startQuiz = (quizId) => {
    setActiveQuizId(quizId);
  };

  const quitQuiz = () => {
    setActiveQuizId(null);
  };

  const currentQuestions = questionsData[activeQuizId];

  return (
    <>
      <Navbar />
      {!activeQuizId ? (
        <>
          <Header title="Available Quizzes" subtitle="Pick one and test yourself!" />

          {/* 🔽 Home Section Anchor */}
          <div id="home">
            <Home />
          </div>

          {/* 🔽 Quizzes Section Anchor */}
          <div id="quizzes">
            <QuizList quizzes={quizzes} onStartQuiz={startQuiz} />
          </div>

          {/* 🔽 About Section Anchor */}
          <div id="about" className="p-6 text-center bg-gray-100 text-gray-700">
            <h2 className="text-2xl font-semibold mb-2">About QuizApp</h2>
            <p>This is a quiz app built with React and Tailwind CSS.</p>
          </div>
        </>
      ) : (
        <Quiz questions={currentQuestions} onQuit={quitQuiz} />
      )}
      <Footer />
    </>
  );
}

export default App;
