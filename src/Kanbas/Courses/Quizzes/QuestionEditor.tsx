import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as quizClient from "./client";

import {addQuestion,deleteQuestionAction,setQuestions,updateQuestionAction} from "./QuestionsReducer";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";

const QuizQuestions: React.FC = () => {
  const { cid, qid } = useParams();
  const [questionId, setQuestionId] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const defaultQuestion = {
    quiz: qid,
    type: "Multiple Choice",
    points: 1,
    questionText: "",
    choices: [{ text: "", correct: false }],
    correctAnswer: "",
  };

  const { questions } = useSelector((state: any) => state.QuestionsReducer);
  const question =
    questions.find(
      (a: any) => a.quiz === qid && a._id === questionId
    ) || defaultQuestion;
  const [newQuestion, setNewQuestion] = useState({ ...question });
  

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchQuestions = async () => {
    const fetchedQuestions = await quizClient.findQuestionsForQuiz(
      qid as string
    );
    dispatch(setQuestions(fetchedQuestions));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleNewQuestionChange = (field: string, value: any) => {
    setNewQuestion((prev:any) => ({ ...prev, [field]: value }));
  };

  const handleNewChoiceChange = (index: number, value: string) => {
    const updatedChoices = newQuestion.choices.map((choice: any) => ({ ...choice }));
    updatedChoices[index].text = value;
    setNewQuestion((prev:any) => ({ ...prev, choices: updatedChoices }));
  };

  const handleAddChoice = () => {
    setNewQuestion((prev:any) => ({
      ...prev,
      choices: [...prev.choices, { id: Date.now(), text: "", correct: false }],
    }));
  };

  const handleDeleteChoice = (index: number) => {
    const updatedChoices = [...newQuestion.choices];
    updatedChoices.splice(index, 1);
    setNewQuestion((prev:any) => ({ ...prev, choices: updatedChoices }));
  };

  const handleMarkCorrect = (index: number) => {
    setNewQuestion((prev:any) => ({
      ...prev,
      choices: prev.choices.map((choice:any, i:any) => ({
        ...choice,
        correct: i === index,
      })),
      correctAnswer: prev.choices[index].text,
    }));
  };

  const handleDeleteClick = (questionId: string) => {
    setQuizToDelete(questionId);
    setShowDeleteDialog(true);
  };

  const removeModule = async (quizId: string) => {
    await quizClient.deleteQuestion(quizId);
    dispatch(deleteQuestionAction(quizId));
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setQuizToDelete(null);
  };

  const confirmDelete = async () => {
    if (quizToDelete) {
      await removeModule(quizToDelete);
    }
    setShowDeleteDialog(false);
    setQuizToDelete(null);
  };

  const saveQuestion = async (question: any) => {
    await quizClient.updateQuestion(question);
    dispatch(updateQuestionAction({
        ...question,
        _id: question._id.toString() // Convert ObjectId to string
      }));
      setQuestionId(null);
      setNewQuestion(defaultQuestion)
      
  };

  const createQuestionsForQuiz = async (qid: string, assignmentData: any) => {
    if (!qid) return;
    try {
      const newQuizQuestion = { ...newQuestion, quiz: qid };
      const question = await quizClient.createQuestion(
        qid,
        newQuizQuestion
      );
      dispatch(addQuestion(question));
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

 

  const handleSaveNewQuestion = async () => {
    if (questionId) {
      const updatedOuestion = { ...newQuestion, _id: questionId };
      await saveQuestion(updatedOuestion);
    } else {
      const newQuizQuestion = {
        ...newQuestion,
        _id: new Date().getTime().toString(),
      };
      await createQuestionsForQuiz(qid!, newQuizQuestion);
    }
    setShowModal(false);
  };
  const totalPoints = questions
  .filter((q: any) => q.quiz === qid) // Filter questions for the current quiz
  .reduce((sum: number, question: any) => sum + (question.points || 0), 0); // Sum up the points

  return (
    <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Quiz Questions</h2>
      
            {isFaculty && (
                <div className="ms-auto">
                  
                <button
                    id="wd-add-assignments-btn"
                    className="btn btn-md btn-danger me-1 float-end"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus className="position-relative" style={{ paddingRight: 1 }} />
                    Add Questions
                </button>
                

                <button
                    id="wd-add-assignments-btn"
                    className="btn btn-md btn-secondary me-1 float-end"
                    onClick={() => setShowModal(true)}
                >
                    Total Points: 
                    {totalPoints}
                </button>
                </div>
            )}
        </div>
      
      {showModal && (
        <Modal
        setShowModal={setShowModal}
        newQuestion={newQuestion}
        handleNewQuestionChange={handleNewQuestionChange}
        handleNewChoiceChange={handleNewChoiceChange}
        handleMarkCorrect={handleMarkCorrect}
        handleDeleteChoice={handleDeleteChoice}
        handleAddChoice={handleAddChoice}
        handleSaveNewQuestion={handleSaveNewQuestion}
        />
      )}
      <br></br>
      <br></br>
      <div className="questions-list " style={{ marginTop: '-20px' }}>
      {questions.length > 0 ? (
        questions.map((question: any, index: number) => (
          <div key={question._id || index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title bg-dark bg-opacity-25 p-4 rounded text-capitalize d-flex justify-content-between align-items-center">{`Q${index + 1}: ${
                question.questionText || "Untitled Question"
              }`}
              <p className="d-flex justify-content-center align-items-center fs-6 mb-0 fst-italic"> Type: {question.type}</p>
            
              </h5>
              

              {/* Choices */}
              {question.type === "Multiple Choice" && (
                <ul className="list-unstyled px-5 mt-4 d-flex flex-wrap gap-3 justify-content-around align-items-center">
                {question.choices.map((choice: any, idx: number) => (
                    <li
                      className={`px-5 py-2 rounded mb-2 mx-4 text-center ${
                        choice.correct ? "bg-success bg-opacity-50" : "bg-primary bg-opacity-25"
                      }`}
                      key={idx}
                      style={{
                        //fontWeight: choice.correct ? "bold" : "normal",
                        //color: choice.correct ? "green" : "black",
                        width: "30%",
                      }}
                    >
                      {choice.text || `Answer ${idx + 1}`}
                    </li>

                    
                    
                ))}
                </ul>

              )}
              <div className="d-flex justify-content-between align-items-center mt-4">
              <p className="card-text bg-success bg-opacity-50 p-2 rounded text-capitalize d-inline-flex fs-8 mb-0 ">
                Points: {question.points}
              </p>
              {isFaculty && (
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-primary me-2 fs-6"
                    onClick={() => {
                      setActiveQuestion(question);
                      setNewQuestion({
                        ...question, 
                      });
                      setQuestionId(question._id);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger fs-6"
                    onClick={() => handleDeleteClick(question._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
              
              </div>
             
              {/* Action Buttons */}
              
              {showDeleteDialog && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={cancelDelete}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this Question?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>No, Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
            </div>
          </div>
        ))
      ) : (
        <p>No questions available. Click "Add Questions" to create one.</p>
      )}
    </div>

      
      </div>
  );
};

export default QuizQuestions;