
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import { GiNotebook } from "react-icons/gi";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import * as db from "../../Databases";
import { useParams } from "react-router";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);
    return (
      <div id="wd-assignments" className="container-fluid my-4">
        <div className="d-flex flex-column w-100">
        <AssignmentControls /><br/><br/>
        <ul id="wd-assignments" className="list-group rounded-0 module-container w-100" style={{overflowX:'hidden'}}>
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray w-100">
            <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center w-100">
                  <BsGripVertical className="me-2 fs-3" />
                  <GoTriangleDown className="me-2 fs-4"/>
                    Assignments
                    <div className="ms-auto">
                      <AssignmentControlButtons />
                    </div>
            </div>
            <ul className="wd-lessons list-group rounded-0 w-100">
            {assignments.map(assignment => (
              <li key={assignment._id} className="wd-lesson d-flex border-bottom border-gray w-100 style={{ overflowX: 'hidden' }}">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <GiNotebook className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding w-100">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <strong>{assignment.title}</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">{assignment.title} </span>| <span className="text-dark">Not available until</span> {assignment.availableDate} |<br/><span className="text-dark">Due</span> {assignment.dueDate}| {assignment.points} pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      </div>
      
  );}
  