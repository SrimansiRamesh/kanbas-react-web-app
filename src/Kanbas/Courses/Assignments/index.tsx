import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import { GiNotebook } from "react-icons/gi";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls/><br/><br/>
        <ul id="wd-assignments" className="list-group rounded-0 module-container">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light">
                  <BsGripVertical className="me-2 fs-3" />
                  <GoTriangleDown className="me-2 fs-4"/>
                    Assignments
                  <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <GiNotebook className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A1</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 6 at 12.00am |<br/><span className="text-dark">Due</span> May 13 at 11.59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <GiNotebook className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A2</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 13 at 12.00am |<br/><span className="text-dark">Due</span> May 20 at 11.59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>  
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <GiNotebook className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A3</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 20 at 12.00am |<br/><span className="text-dark">Due</span> May 27 at 11.59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  