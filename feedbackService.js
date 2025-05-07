export const evaluateAnswer = (question, userAnswer) => {
  // Validate inputs
  if (!question || typeof question !== 'object') {
    return {
      verdict: "Invalid Question",
      score: 0,
      suggestions: ["System error: Invalid question format"],
      matchedKeywords: 0
    };
  }

  if (!userAnswer || typeof userAnswer !== 'string') {
    return {
      verdict: "Invalid Answer",
      score: 0,
      suggestions: ["Please provide a valid text answer"],
      matchedKeywords: 0
    };
  }

  // Safe property access with defaults
  const answer = userAnswer.toLowerCase().trim();
  const modelAnswer = question.modelAnswer || "";
  const keywords = question.keywords || [];
  
  // Extract terms from model answer if no keywords provided
  const modelTerms = modelAnswer.toLowerCase().split(/,\s*|\s+/).filter(Boolean);
  const requiredKeywords = keywords.length > 0 ? keywords : modelTerms;

  // Calculate matches
  const matchedKeywords = requiredKeywords
    .filter(keyword => typeof keyword === 'string')
    .filter(keyword => answer.includes(keyword.toLowerCase()));

  const matchPercentage = requiredKeywords.length > 0
    ? Math.round((matchedKeywords.length / requiredKeywords.length) * 100)
    : 0;

  // Generate feedback
  if (matchPercentage >= 70) {
    return {
      verdict: "Excellent",
      score: matchPercentage,
      suggestions: ["You covered all key points!"],
      matchedKeywords: matchedKeywords.length
    };
  } else if (matchPercentage >= 40) {
    const missing = requiredKeywords
      .filter(k => !matchedKeywords.includes(k))
      .join(", ");
    return {
      verdict: "Good",
      score: matchPercentage,
      suggestions: [`Try mentioning: ${missing}`],
      matchedKeywords: matchedKeywords.length
    };
  } else {
    return {
      verdict: "Needs Work",
      score: matchPercentage,
      suggestions: [
        "Review the core concepts",
        `Focus on: ${requiredKeywords.join(", ")}`
      ],
      matchedKeywords: matchedKeywords.length
    };
  }
};