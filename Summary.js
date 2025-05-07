import Feedback from './Feedback';  // Add this import at the top

export default function Summary({ questions, answers, feedback, topic }) {
  const averageScore = Math.round(
    feedback.reduce((sum, f) => sum + f.score, 0) / feedback.length
  );

  return (
    <div className="summary">
      <h2>{topic.toUpperCase()} Interview Results</h2>
      <div className="score-card">
        <h3>Overall Score: {averageScore}%</h3>
        <p>{feedback.filter(f => f.verdict === "Excellent").length} excellent answers</p>
      </div>

      <div className="detailed-feedback">
        {questions.map((q, i) => (
          <div key={i} className="question-review">
            <h4>Q{i+1}: {q.question}</h4>
            <p><strong>Your answer:</strong> {answers[i]}</p>
            <Feedback feedback={feedback[i]} />  {/* Now properly imported */}
          </div>
        ))}
      </div>

      <button onClick={() => window.location.reload()}>
        Start New Interview
      </button>
    </div>
  );
}