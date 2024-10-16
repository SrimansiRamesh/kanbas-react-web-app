import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from '../../Databases';
import AssignmentControls from './AssignmentControls';
import { FaSearch, FaPlus } from 'react-icons/fa';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsGripVertical } from 'react-icons/bs';
import { GiNotebook } from "react-icons/gi";

export default function Assignments() {
  const { cid } = useParams(); // Retrieve courseId from route params
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div className="w-100 p-5">
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <AssignmentControls />
      </div>
      <br />
      <ul className="list-group rounded-0">
        <li className="wd-assignment-group list-group-item p-0 fs-5 border-gray">
          <div className="wd-title p-3 d-flex justify-content-between align-items-center bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="ms-2">Week 1 Assignments</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="text-muted me-4 border rounded-pill border-black p-2">
                40% of Total
              </span>
              <FaPlus className="me-2" aria-label="Add Assignment" />
              <IoEllipsisVertical className="fs-4" aria-label="More options" />
            </div>
          </div>
        </li>
        {courseAssignments.length > 0 ? (
          courseAssignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item p-3 d-flex align-items-center"
              style={{ borderLeft: "4px solid green" }}
            >
              <BsGripVertical className="me-3 fs-2" />
              <GiNotebook className="me-3 text-success" style={{fontSize:'2rem'}}/>
              <div className="flex-grow-1">
                <Link
                  to={`${assignment._id}`}
                  className="text-decoration-none text-dark"
                >
                  <span className="fw-bold fs-5">{assignment.title}</span>
                </Link>
                <br />
                <small className="text-muted">
                  <span className="text-danger">{assignment.title}</span> |{" "}
                  <b>Not available until</b> {assignment.availableDate} at 12:00 am | <br />
                  <b>Due</b> {assignment.dueDate} at 11:59pm | {assignment.points} pts
                </small>
              </div>
              <LessonControlButtons />
            </li>
          ))
        ) : (
          <p>No assignments available for this course.</p>
        )}
      </ul>
    </div>
  );
}