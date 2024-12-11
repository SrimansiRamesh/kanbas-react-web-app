import React from "react";
import { useLocation, useParams } from "react-router-dom";

const QuizResultPage: React.FC = () => {
  const { state } = useLocation();
  const { qid } = useParams();

  const { answers, score, questions } = state || {};

  if (!state) {
    return <div>No results available.</div>;
  }

  const getQuestionText = (questionId: string) => {
    const question = questions.find((q: any) => q._id === questionId);
    return question ? question.questionText : "Unknown Question";
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Quiz Results</h2>
      <h5>Your Score: {score}</h5>
      <div className="row">
        {answers.map((answer: any, index: number) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Question {index + 1}</strong>
                </h5>
                <p className="card-text">
                  <strong>Question:</strong> {getQuestionText(answer.question)}
                </p>
                <p className="card-text">
                  <strong>Your Answer:</strong> {answer.selectedAnswer}
                </p>
                <p className="card-text">
                  <strong>Result:</strong>{" "}
                  <span style={{ color: answer.correct ? "green" : "red" }}>
                    {answer.correct ? "✔️ Correct" : "❌ Incorrect"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizResultPage;
