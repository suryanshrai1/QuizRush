import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'  // fixed import case here
import Header from './Header'
import Footer from './Footer'
import QuizList from './QuizList'
// import QuizCard from './QuizCard'  // REMOVE this import if not used directly

import quizzes from './data/quizzes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header title="Available Quizzes" subtitle="Pick one and test yourself!" />
      <Home />
      <QuizList quizzes={quizzes} />
      <Footer />
      {/* Removed <QuizCard /> here */}
    </>
  )
}

export default App
