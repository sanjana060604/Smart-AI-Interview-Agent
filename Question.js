import { useState } from 'react';

export default function Question({ question, questionNumber, totalQuestions, onSubmit }) {
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!answer.trim()) {
        throw new Error("Answer cannot be empty");
      }
      if (answer.trim().length < 3) {
        throw new Error("Please write at least 3 characters");
      }
      onSubmit(answer);
      setAnswer('');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="question-card">
      <div className="progress">
        Question {questionNumber}/{totalQuestions}
      </div>
      <h3>{question?.question || "Question not available"}</h3>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows={5}
          minLength={3}
          required
          disabled={isSubmitting}
        />
        
        <button 
          type="submit" 
          disabled={!answer.trim() || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 
           questionNumber < totalQuestions ? 'Next' : 'Finish'}
        </button>
      </form>
    </div>
  );
}