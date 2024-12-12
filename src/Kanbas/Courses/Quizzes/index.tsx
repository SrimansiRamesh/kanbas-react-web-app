import  { useEffect, useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { FaPlus, FaTrash } from 'react-icons/fa';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsGripVertical } from 'react-icons/bs';
import { GiNotebook } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import QuizzesControls from './QuizzesControls';
import { addQuiz, deleteQuizAction , updateQuizAction , editQuiz ,setQuizzes,Quiz } from '../Quizzes/reducer';
import { deleteQuiz, findQuizzesForCourse,updateQuiz } from './client';
import GreenCheckmark from "../Modules/GreenCheckmark";
export  function formatDate(isoString:any){
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
export default function Quizzes() {
    const { cid,qid } = useParams(); 
    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const toggleDropdown = (quizId: string) => {
      setActiveDropdown((prev) => (prev === quizId ? null : quizId));
    };
  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!cid) return;
      try {
        const data = await findQuizzesForCourse(cid); // Fetch by courseId
        dispatch(setQuizzes(data));
      } catch (error) {
        console.error(`Error fetching quizzes for course ${cid}:`, error);
      }
    };

    fetchQuizzes();
  }, [cid, dispatch]);

  
  const handleDelete = async (quizId: string) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await deleteQuiz(quizId);
        dispatch(deleteQuizAction(quizId));
      } catch (error) {
        console.error("Error deleting quiz:", error);
      }
    }
    
  };

  const handleEdit=(quizId: any)=>{
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`)
  }

  const handlePublish=(quizId:any)=>{
    const quizToUpdate=quizzes.find((q:any)=>q._id===quizId);
    const updatedQuiz={...quizToUpdate,published:!quizToUpdate.published};
    updateQuiz(updatedQuiz);
    dispatch(updateQuizAction(updatedQuiz));
  }
  
 

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  return (
    <div className="w-100 p-5">
      <QuizzesControls cid={cid} />
      <br />
      <ul className="list-group rounded-0">
        <li className="wd-assignment-group list-group-item p-0 fs-5 border-gray">
          <div className="wd-title p-3 d-flex justify-content-between align-items-center bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ms-2">Week 1 Quizzes</span>
            </div>
          </div>
        </li>
        {quizzes.length > 0 ? (
          quizzes
          .filter((quiz: any) => isFaculty || (isStudent && quiz.published) )
          .map((quiz: any) => (
            <li
              key={quiz._id}
              className="list-group-item p-3 d-flex align-items-center"
              style={{ borderLeft: "4px solid green" }}>
              <GiNotebook className="me-4 text-success" style={{fontSize:'2rem'}}/>
              <div className="flex-grow-1">
                <Link
                  to={`QuizDetails/${quiz._id}`}
                  className="text-decoration-none text-dark"
                >
                  <span className="fw-bold fs-5">{quiz.title}</span>
                </Link>
                <br />
                <small className="text-muted">
                  <span className="text-danger">{quiz.title}</span> |{" "}
                  <b>Not available until</b> {formatDate(quiz.availableDate)} at 12:00 am | <br />
                  <b>Due</b> {formatDate(quiz.dueDate)} at 11:59pm | {quiz.points} pts
                </small>

              </div>
              {isFaculty&&(
              <div className="float-end position-relative">
              <GreenCheckmark />
              <IoEllipsisVertical
                className="fs-4"
                onClick={() => toggleDropdown(quiz._id)}
                style={{ cursor: "pointer" }}
              />
              {activeDropdown === quiz._id && (
              <ul
                className="dropdown-menu show position-absolute"
                style={{ right: 0 }}
              >
                <li
                  className="dropdown-item "
                  onClick={() => handleEdit(quiz._id)}
                  style={{cursor:"pointer"}}
                >
                  Edit
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => handleDelete(quiz._id)}
                  style={{cursor:"pointer"}}
                >
                  Delete
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => handlePublish(quiz._id)}
                  style={{cursor:"pointer"}}
                >
                  {quiz.published?"Unpublish":"Publish"}
                </li>
              </ul>
            )}
            </div>
              )}
            </li>
          ))
        ) : (
          <p>No quizzes available for this course.</p>
        )}
      </ul>
    </div>
  );
}