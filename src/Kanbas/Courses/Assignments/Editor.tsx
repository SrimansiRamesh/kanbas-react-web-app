

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { addAssignment } from "./reducer";
import { Assignment, addAssignment, updateAssignmentAction } from "./reducer"; // Ensure you import updateAssignment
import store from "../../store";
import { title } from "process";
import { createAssignment, updateAssignment } from "./client";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [assignmentName, setAssignmentName] = useState("");
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState("2024-12-31");
    const [availableFrom, setAvailableFrom] = useState("2024-11-01");
    const [availableUntil, setAvailableUntil] = useState("2024-12-31");
    const [editedAssignment, setEditedAssignment] = useState<Assignment | null>(null);
    const {assignments}  = useSelector((state:any) => state.assignmentsReducer);
    
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      const [assignment, setAssignment] = useState(
        existingAssignment || {
          _id: "",
          title: '',
          description: '',
          points: 100,
          dueDate: '',
          availableDate: '',
          availableUntil: '',
          course: cid,
        }
      );

    const [formData, setFormData] = useState({ ...assignment });
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isStudent = Boolean(currentUser.role === "STUDENT");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
    
        setFormData((prevData:any) => {
            if (type === "checkbox") {
                // For checkbox updates, nested inside onlineEntryOptions
                return {
                    ...prevData,
                    onlineEntryOptions: {
                        ...prevData.onlineEntryOptions,
                        [id]: checked,
                    },
                };
            } else {
                // For input, textarea, and select elements
                return {
                    ...prevData,
                    [id]: value,
                };
            }
        });
    };
    

    const handleSave = async () => {
        try {
          if (existingAssignment) {
            // Update existing assignment
            const updatedAssignment = await updateAssignment(assignment);
            dispatch(updateAssignmentAction(updatedAssignment));
          } else {
            // Create a new assignment on the server
            const newAssignment = await createAssignment(cid!, assignment);
            dispatch(addAssignment(newAssignment));
          }
      
          // Navigate back to the Assignments page after saving
          navigate(`/Kanbas/Courses/${cid}/Assignments`);
        } catch (error) {
          console.error("Error saving assignment:", error);
          alert("An error occurred while saving the assignment. Please try again.");
        }
      };
    

    return (
        <div id="wd-css-styling-forms" className="container my-4">
            <h1>{assignment.title || "New Assignment"}</h1>
            
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Assignment Name</label>
                <input id="title" className="form-control" value={assignment.title} onChange={(e)=>setAssignment({...assignment,title:e.target.value})} disabled={isStudent}/>
            </div>

            <div className="mb-3">
                <textarea id="description" className="form-control" rows={5} value={assignment.description} onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} disabled={isStudent}/>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="points" className="form-label">Points</label>
                </div>
                <div className="col-md-7">
                    <input id="points" type="number" className="form-control" value={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: +e.target.value })} disabled={isStudent}/>
                </div>
            </div>

            {/* <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-7">
                    <select id="assignmentGroup" className="form-select" value={assignment.assignmentGroup} onChange={handleInputChange} disabled={isStudent}>
                        <option value="Assignments">Assignments</option>
                        <option value="Quizzes">Quizzes</option>
                        <option value="Exams">Exams</option>
                        <option value="Projects">Projects</option>
                    </select>
                </div>
            </div> */}

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="displayGradeAs" className="form-label">Display Grade As</label>
                </div>
                <div className="col-md-7">
                    <select id="displayGradeAs" className="form-select" value={formData.displayGradeAs} onChange={handleInputChange} disabled={isStudent}>
                        <option value="Percentage">Percentage</option>
                        <option value="GPA">GPA</option>
                        <option value="Scores">Scores</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="submissionType" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-7">
                    <select id="submissionType" className="form-select" value={formData.submissionType} onChange={handleInputChange} disabled={isStudent}>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>

                    {formData.submissionType === "Online" && (
                        <div className="border border-gray p-3 rounded mt-2">
                            <h6><b>Online Entry Options</b></h6>
                            {["textEntry", "websiteUrl", "mediaRecordings", "studentAnnotations", "fileUploads"].map(option => (
                                <div className="form-check" key={option}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={option}
                                        checked={formData.onlineEntryOptions[option]}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={option} className="form-check-label">
                                        {option.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                </div>
                <div className="col-md-7">
                    <input id="dueDate" type="date" className="form-control" value={assignment.dueDate} onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} disabled={isStudent} />
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-md-5 text-end">
                    <label htmlFor="availableDate" className="form-label">Available From</label>
                </div>
                <div className="col-md-7">
                    <input id="availableDate" type="date" className="form-control" value={assignment.availableDate} onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} disabled={isStudent} />
                </div>
            </div>

            <div className="d-flex justify-content-end mb-3">
                <Link
                id="wd-cancel-btn"
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className="btn btn-secondary me-2">
                Cancel
                </Link>
                <Link
                    to={`/Kanbas/Courses/${cid}/Assignments`}
                    onClick={handleSave}
                    className="btn btn-danger me-2">
                    Save
                </Link>
            </div>
        </div>
    );
}

