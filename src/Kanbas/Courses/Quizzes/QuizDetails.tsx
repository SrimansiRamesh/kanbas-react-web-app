import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { formatDate } from ".";
const QuizDetails: React.FC = () => {
 const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
 const {qid,cid}=useParams();
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const isFaculty = currentUser?.role === "FACULTY";
 const navigate= useNavigate();
 const defaultQuiz = {
    title: "",
    description: "",
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: false,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: "Never",
    accessCode: "",
    oneQuestionAtATime: false,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: "",
    availableDate: "",
    untilDate: "",
    course:cid
  };
  const handleEdit=(quizId:any)=>{
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`);
  };
  const handlePreview=(quizId:any)=>{
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Preview`);
  }
  const quiz = quizzes.find((a:any) => a.course === cid && a._id === qid) || defaultQuiz;
  //console.log(quiz);
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
            
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="card-title">{quiz.title}</h3>
            <div>
              <button className="btn btn-secondary me-2" onClick={()=>handlePreview(quiz._id)}>Take Quiz</button>

              {isFaculty && (<button className="btn btn-primary" onClick={()=>handleEdit(quiz._id)}>Edit</button>)}
            </div>
          </div>

          {/* Quiz Details */}
          <div className="row">
            <div className="col-md-6">
              <p><strong>Quiz Type:</strong> {quiz.type}</p>
              <p><strong>Points:</strong> {quiz.points}</p>
              <p><strong>Assignment Group:</strong> {quiz.assignmentGroup}</p>
              <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers?'Yes':'No'}</p>
              <p><strong>Time Limit:</strong> {quiz.timeLimit}</p>
              <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts?'Yes':'No'}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers}</p>
              <p><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime?'Yes':'No'}</p>
              <p><strong>Webcam Required:</strong>{quiz.webcamRequired?'Yes':'No'}</p>
              <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering?'Yes':'No'}</p>
              <p><strong>Description:</strong> {quiz.description}</p>
            </div>
          </div>

          {/* Availability Details */}
          <hr />
          <h5>Due</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Due</th>
                <th>For</th>
                <th>Available from</th>
                <th>Until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formatDate(quiz.dueDate)}</td>
                <td>Everyone</td>
                <td>{formatDate(quiz.availableDate)}</td>
                <td>{formatDate(quiz.untilDate)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
