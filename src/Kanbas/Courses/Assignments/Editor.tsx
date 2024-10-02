import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
            <div id="wd-css-styling-forms" className="container my-4">
                {/* Assignment Name div*/}
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label ">Assignment Name</label>
                    <input id="wd-name" className="form-control " defaultValue="A1" />
                </div>
                {/* Text area div */}
                <div className="mb-3">
                    <textarea id="wd-description" className="form-control" rows={5}>
                        The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, links to the labs assignment and Kanbas assignment, and links to all source code repositories. The Kanbas application should have a link to navigate back to the landing page.
                    </textarea>
                </div>
                {/* Points div */}
                <div className="row mb-3  align-items-center">
                    <div className="col-md-5 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-7">
                        <input id="wd-points" className="form-control" defaultValue={100} />
                    </div>
                </div>
                {/* Assignment Group div */}
                <div className="row mb-3  align-items-center">
                    <div className="col-md-5 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-7">
                        <select id="wd-group" className="form-select">
                        <option value="Assignments" selected>ASSIGNMENTS</option>
                        <option value="QUIZES">QUIZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </div>
                </div>
                {/* Display grade as div */}
                <div className="row mb-3 align-items-center">
                    <div className="col-md-5 text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                    </div>
                    <div className="col-md-7">
                        <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage" selected>PERCENTAGE</option>
                        <option value="GPA">GPA</option>
                        <option value="SCORES">SCORES</option>
                        </select>
                    </div>
                </div>
                {/* Submission Type as - div */}
                <div className="row mb-3 align-items-center">
                    <div className="col-md-5 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-md-7">
                        <div className="border border-gray p-3 rounded">
                            <select id="wd-submission-type" className="form-select">
                                <option value="Online" selected>ONLINE</option>
                                <option value="offline">OFFLINE</option>
                            </select><br/>
                            <h6><b>Online Entry Options</b></h6>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotations</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
                {/* Assign - div */}
                <div className="row mb-3 align-items-center">
                    <div className="col-md-5 text-end">
                        <label htmlFor="wd-assignment-type" className="form-label">Assign</label>
                    </div>
                    <div className="col-md-7">
                        <div className="border border-gray p-3 rounded">
                            <div className="mb-3">
                                <label htmlFor="wd-assign-to" className="form-label"><b>Assign To</b></label>
                                <input id="wd-assign-to" type="text" className="form-control" defaultValue="Everyone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="wd-due-date" className="form-label"><b>Due Date</b></label>
                                <input id="wd-due-date" type="date" className="form-control" defaultValue="2024-05-13" />
                            </div>  
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label"><b>Available From</b></label>
                                    <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-13" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                                    <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-13" />
                                </div>
                            </div>   
                        </div>
                    </div>  
                </div>
                <hr />
                <div className="d-flex justify-content-end mb-3">
                <Link id="wd-cancel-btn"
                    to="/Kanbas/Courses/1234/Assignments"
                    className="btn btn-secondary me-2">
                    Cancel </Link>
                <Link id="wd-save-btn"
                    to="/Kanbas/Courses/1234/Assignments"
                    className="btn btn-danger me-2">
                    Save </Link>
                </div>
            </div>
        );
}
