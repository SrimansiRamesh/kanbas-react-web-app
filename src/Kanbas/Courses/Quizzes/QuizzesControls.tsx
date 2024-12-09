import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function QuizzesControls({ cid }:any) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    //console.log(currentUser);
    const isFaculty = currentUser?.role === "FACULTY";
    return (
      <div id="wd-modules-controls" className="text-nowrap">
        <div className="d-flex justify-content-between align-items-center my-3">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            id="wd-search-quiz"
            type="text"
            className="form-control"
            placeholder="Search for Quizzes"
          />
        </div>
        {isFaculty && (
          <div className="ms-auto">
          <Link
            id="wd-add-quizzes-btn"
            className="btn btn-md btn-danger me-1 float-end"
            to={`/Kanbas/Courses/${cid}/Quizzes/new`}
          >
            <FaPlus className="position-relative" style={{ bottom: "1px", paddingRight:1}} />
            Quiz
          </Link>
          </div>
         ) 
         } 
        </div>
      </div>
    );
  }