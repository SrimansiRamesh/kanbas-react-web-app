import React,{ useEffect, useState }  from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLastAttempt,findQuestionsForQuiz,getQuestionById } from "./client";
import { setQuestions } from "./QuestionsReducer";

const QuizResultPage: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const studentId = currentUser._id;
  const { state } = useLocation();
  const { qid } = useParams();
  const [lastAttempt, setLastAttempt] = useState<any>(null); // To store the last attempt data
  const [error, setError] = useState<string | null>(null); // To store error if fetching fails

  //const { answers, score, questions } = state || {};
  const { questions } = useSelector((state: any) => state.QuestionsReducer);
  const [questionData, setQuestionData] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    const fetchLastAttemptData = async () => {
      try {
        const data = await getLastAttempt(qid as string, studentId as string);
        //getQuestions(qid);
        console.log(data);
        setLastAttempt(data); // Store the data in state
      } catch (error) {
        setError("Failed to fetch last attempt data.");
        console.error(error);
      }
    };

    fetchLastAttemptData();
  }, [qid, studentId]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (lastAttempt && lastAttempt.answers) {
        const fetchedQuestions: { [key: string]: any } = {};

        await Promise.all(
          lastAttempt.answers.map(async (answer: any) => {
            if (!questionData[answer.question]) {
              try {
                const question = await getQuestionById(
                  answer.question,
                  qid as string
                );
                fetchedQuestions[answer.question] = question;
              } catch (error) {
                console.error('Failed to fetch question ${answer.question}', error);
              }
            }
          })
        );

        setQuestionData((prevData) => ({ ...prevData, ...fetchedQuestions }));
      }
    };

    fetchQuestions();
  }, [lastAttempt, questionData, qid]);

  const getQuestions=async (quizId:any)=>{
    const data= await findQuestionsForQuiz(quizId);
    setQuestions(data);
    console.log('getting questions...',data);
    return data;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!lastAttempt) {
    return <div>Loading...</div>;
  }

  const { answers, score } = lastAttempt;
  //console.log(state);
  // if (!state) {
  //   return <div>No results available.</div>;
  // }
  const getQuestionText = (questionId: string) => {
    return questionData[questionId]?.questionText || "Loading question...";
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Quiz Results</h2>
      <h5>Your Score: {score}</h5>
      <div className="row">
        {answers?.map((answer: any, index: number) => (
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
