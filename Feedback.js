export default function Feedback({ feedback }) {
  const feedbackClass = `feedback-${
    feedback.verdict === 'Excellent' ? 'excellent' :
    feedback.verdict === 'Good' ? 'good' :
    'needs-work'
  }`;

  return (
    <div className={`card ${feedbackClass}`} style={{ marginTop: '1rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>
        {feedback.verdict} ({feedback.score}%)
      </h3>
      <p>Matched keywords: {feedback.matchedKeywords}</p>
      <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
        {feedback.suggestions.map((suggestion, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}