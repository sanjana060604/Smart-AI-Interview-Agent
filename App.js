import { useState } from 'react';
import Interview from './components/Interview';
import './App.css';
import { FiCode, FiLayers, FiDatabase } from 'react-icons/fi';

function App() {
  const [started, setStarted] = useState(false);  // Track if the interview has started
  const [completed, setCompleted] = useState(false); // Track if the interview is completed
  const [topic, setTopic] = useState('python');

  const getTopicIcon = () => {
    switch(topic) {
      case 'python': return <FiCode className="topic-icon" />;
      case 'html': return <FiLayers className="topic-icon" />;
      case 'sql': return <FiDatabase className="topic-icon" />;
      default: return <FiCode className="topic-icon" />;
    }
  };

  // Function to start a new interview
  const handleStartNewInterview = () => {
    setStarted(true);
    setCompleted(false);  // Reset completed state when starting a new interview
  };

  // Function to retry the interview
  const handleRetryInterview = () => {
    setStarted(true);
    setCompleted(false);  // Reset completed state to allow retry
  };

  return (
    <div className="app">
      {!started ? (
        <div className="card">
          <div className="header">
            <h1>Smart AI Interview Agent</h1>
            <p>Practice technical interviews with AI-powered feedback</p>
          </div>
          
          <div className="topic-selection">
            {getTopicIcon()}
            <select 
              className="select-dropdown"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="python">Python Interview</option>
              <option value="html">HTML/CSS Interview</option>
              <option value="sql">SQL Interview</option>
            </select>
          </div>
          
          <button 
            className="btn"
            onClick={handleStartNewInterview}  // Start a new interview
          >
            Start Interview Session
          </button>
        </div>
      ) : (
        <Interview 
          topic={topic} 
          onComplete={() => setCompleted(true)}  // Mark as completed when interview finishes
        />
      )}

      {completed && (
        <button 
          className="btn"
          onClick={handleRetryInterview}  // Retry interview button
        >
          Retry Interview
        </button>
      )}
    </div>
  );
}

export default App;
