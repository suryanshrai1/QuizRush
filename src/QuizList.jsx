import React from 'react';
import QuizCard from './QuizCard';

const QuizList = ({ quizzes }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-8">
        Available Quizzes
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quizzes && quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No quizzes available.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizList;
