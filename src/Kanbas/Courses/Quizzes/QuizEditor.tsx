import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuizAction } from "./reducer";
import * as quizClient from "./client"
import QuestionEditor from "./QuestionEditor";
import { formatDate } from ".";
export default function QuizEditor() {
  const { cid,qid } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "ADMIN";
  const { quizzes } = useSelector((state:any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("details");
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
  
  const quiz = quizzes.find((a:any) => a.course === cid && a._id === qid) || defaultQuiz;
    const [formData, setFormData] = useState({ ...quiz });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,

    });
  };
  const createQuizzesForCourse = async (cid: string, assignmentData: any) => {
    if (!cid) return;
    try {
        const newQuiz = { ...assignmentData, course: cid };
        const quiz = await quizClient.createQuiz(cid, newQuiz);
        dispatch(addQuiz(quiz)); // Dispatch the new assignment to the store
    } catch (error) {
        console.error("Error creating quiz:", error);
    }
};
const formatDateForInput = (isoString:any) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const saveQuiz = async (course: any) => {
    console.log(course);
    await quizClient.updateQuiz(course); 
    dispatch(updateQuizAction(quiz));
  };
  const handleSave = async () => {
    if (qid) {
        const updatedquiz = { ...formData, _id: qid };
          await saveQuiz(updatedquiz);
    } else {
        const newQuiz = { ...formData, _id: new Date().getTime().toString() };
        await createQuizzesForCourse(cid!, newQuiz);
        console.log(newQuiz)
    }
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
};

  const handleCancel = () => {
    navigate(`/Kanbas/courses/${cid}/quizzes`);
  };


  return (
    <div className="container my-4">
      <h1>Quiz Editor</h1>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </li>
      </ul>

      {activeTab === "details" && (
        <form className="mt-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Quiz Name"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quiz-description" className="form-label">
              Quiz Instructions:
            </label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Quiz Type</label>
            <select
              className="form-select"
              name="quizType"
              value={formData.quizType}
              onChange={handleInputChange}
            >
              <option>Graded Quiz</option>
              <option>Practice Quiz</option>
              <option>Graded Survey</option>
              <option>Ungraded Survey</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Assignment Group</label>
            <select
              className="form-select"
              name="assignmentGroup"
              value={formData.assignmentGroup}
              onChange={handleInputChange}
            >
              <option>Quizzes</option>
              <option>Exams</option>
              <option>Assignments</option>
              <option>Project</option>
            </select>
          </div>
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Points</label>
            </div>
            <div className="col-md-7">
            <input
              type="number"
              className="form-control"
              name="points"
              value={formData.points}
              onChange={handleInputChange}
            />
            </div>
          </div>
          
        <div>
          {/* Shuffle Answers */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Shuffle Answers</label>
            </div>
            <div className="col-md-7">
            <input
              type="checkbox"
              name="shuffleAnswers"
              checked={formData.shuffleAnswers}
              onChange={handleInputChange}
            />
            </div>
          </div>

          {/* Time Limit */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label" htmlFor="timeLimit">Time Limit (minutes)</label>
            </div>
            <div className="col-md-7">
            <input
              type="number"
              id="timeLimit"
              name="timeLimit"
              value={formData.timeLimit}
              onChange={handleInputChange}
              className="form-control"
            />
            </div>
          </div>

          {/* Multiple Attempts */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Multiple Attempts</label>
            </div>
            <div className="col-md-7">
            <input
            
              type="checkbox"
              name="multipleAttempts"
              checked={formData.multipleAttempts}
              onChange={handleInputChange}
            />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Maximum Attempts</label>
            </div>
            <div className="col-md-7">
            <input
              type="number"
              name="maxAttempts"
              value={formData.maxAttempts}
              onChange={handleInputChange}
            />
            </div>
          </div>

          {/* Show Correct Answers */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label" htmlFor="showCorrectAnswers">Show Correct Answers</label>
            </div>
            <div className="col-md-7">
            <select
              id="showCorrectAnswers"
              name="showCorrectAnswers"
              value={formData.showCorrectAnswers}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="Never">Never</option>
              <option value="Immediately">Immediately</option>
              <option value="After Due Date">After Due Date</option>
            </select>
            </div>
          </div>

          {/* Access Code */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label" htmlFor="accessCode">Access Code</label>
            </div>
            <div className="col-md-7">
            <input
            className="form-control"
              type="text"
              id="accessCode"
              name="accessCode"
              value={formData.accessCode}
              onChange={handleInputChange}
            />
            </div>
          </div>

          {/* One Question at a Time */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">One Question at a Time</label>
            </div>
            <div className="col-md-7">
            <input
              type="checkbox"
              name="oneQuestionAtATime"
              checked={formData.oneQuestionAtATime}
              onChange={handleInputChange}
            />
            </div>
          </div>

          {/* Webcam Required */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Webcam Required</label>
            </div>
            <div className="col-md-7">
            <input
              type="checkbox"
              name="webcamRequired"
              checked={formData.webcamRequired}
              onChange={handleInputChange}
            />
            </div>
          </div>

          {/* Lock Questions After Answering */}
          <div className="row mb-3 align-items-center">
          <div className="col-md-5 text-end">
            <label className="form-label">Lock Questions After Answering</label>
            </div>
            <div className="col-md-7">
            <input 
              type="checkbox"
              name="lockQuestionsAfterAnswering"
              checked={formData.lockQuestionsAfterAnswering}
              onChange={handleInputChange}
            />
            </div>
          </div>
          </div>
          {/* Dates */}
         
          <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                </div>
                <div className="col-md-7">
                    <input id="dueDate" name="dueDate" type="date" className="form-control" value={formatDateForInput(formData.dueDate)} onChange={handleInputChange} />
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="availableDate" className="form-label">Available From</label>
                </div>
                <div className="col-md-7">
                    <input id="availableDate" name="availableDate" type="date" className="form-control" value={formatDateForInput(formData.availableDate)} onChange={handleInputChange} />
                </div>
            </div>
            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="untilDate" className="form-label">Until Date</label>
                </div>
                <div className="col-md-7">
                    <input id="untilDate" name="untilDate" type="date" className="form-control" value={formatDateForInput(formData.untilDate)} onChange={handleInputChange} />
                </div>
            </div>
          <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
      {activeTab === "questions"&&(
        <div><QuestionEditor/><hr /></div>
      )}
    </div>
  );
}