import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const sorted = stored.sort((a, b) => b.score - a.score);
    setEntries(sorted);
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen" id="leaderboard">
      <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-8">
        Leaderboard
      </h2>
      {entries.length === 0 ? (
        <p className="text-center text-gray-500">No scores yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Score</th>
                <th className="border px-4 py-2">Quiz ID</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{entry.name}</td>
                  <td className="border px-4 py-2">{entry.score}</td>
                  <td className="border px-4 py-2">{entry.quizId}</td>
                  <td className="border px-4 py-2">
                    {new Date(entry.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
