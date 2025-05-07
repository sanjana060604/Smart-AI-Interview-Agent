import { useState } from 'react';
import { questionBank } from '../questions';
import { evaluateAnswer } from '../services/feedbackService';
import Question from './Question';
import Feedback from './Feedback';
import Summary from './Summary';

export default function Interview({ topic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const questions = questionBank[topic] || [];

  const handleSubmit = (answer) => {
    try {
      // Validate
      if (!answer || typeof answer !== 'string' || answer.trim().length < 3) {
        throw new Error("Please provide a meaningful answer (at least 3 characters)");
      }

      if (!questions[currentIndex]) {
        throw new Error("Question data not found");
      }

      const evaluation = evaluateAnswer(questions[currentIndex], answer);
      
      setAnswers([...answers, answer]);
      setFeedback([...feedback, evaluation]);
      setError(null);

      // Proceed to next or complete
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCompleted(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (completed) {
    return <Summary questions={questions} answers={answers} feedback={feedback} topic={topic} />;
  }

  return (
    <div className="interview-container">
      {error && <div className="error-message">{error}</div>}
      
      <Question
        question={questions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onSubmit={handleSubmit}
      />
      
      {feedback.length > 0 && (
        <Feedback feedback={feedback[feedback.length - 1]} />
      )}
    </div>
  );
}