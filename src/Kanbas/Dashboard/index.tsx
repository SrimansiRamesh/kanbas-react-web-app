// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import * as db from "../Databases";

// export default function Dashboard(
//   { courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse }: {
//   courses: any[]; course: any; setCourse: (course: any) => void;
//   addNewCourse: () => void; deleteCourse: (course: any) => void;
//   updateCourse: () => void; })
//   {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>New Course
//           <button className="btn btn-primary float-end"
//                   id="wd-add-new-course-click"
//                   onClick={addNewCourse} > Add </button>
//           <button className="btn btn-warning float-end me-2"
//                 onClick={updateCourse} id="wd-update-course-click">
//           Update
//           </button>
//       </h5>
//       <br />
//       <input value={course.name} className="form-control mb-2"
//              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
//       <textarea value={course.description} className="form-control"
//              onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) =>
//         enrollments.some(
//           (enrollment) =>
//             enrollment.user === currentUser._id &&
//             enrollment.course === course._id
//         )).length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses.filter((course) =>
//           enrollments.some(
//             (enrollment:any) =>
//               enrollment.user === currentUser._id &&
//               enrollment.course === course._id
//             ))
//           .map((course) => (
//           <div key={course._id} className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
//             <div className="card h-100 rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to={`/Kanbas/Courses/${course._id}/Home`}>
//                 <img src="/images/reactjs.png" width="100%" height={160} />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                   {course.name}
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                   {course.description}
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                     <button onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }} className="btn btn-danger float-end"
//                     id="wd-delete-course-click">
//                     Delete
//                     </button>
//                     <button id="wd-edit-course-click"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }}
//                       className="btn btn-warning me-2 float-end" >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//            ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as db from "../Databases";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  // State to toggle enrollment filter
  const [showEnrolled, setShowEnrolled] = useState(false);

  // Get list of enrolled courses for the current user
  const enrolledCourses = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  // Filter courses based on enrollment toggle
  const displayedCourses = showEnrolled
    ? courses.filter(course => enrolledCourses.includes(course._id))
    : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end"
                onClick={addNewCourse}> Add </button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse}> Update </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />
      <button
        className="btn btn-info mb-3"
        onClick={() => setShowEnrolled(prev => !prev)}
      >
        {showEnrolled ? "Show All Courses" : "Show Enrolled Courses"}
      </button>
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
              <div className="card h-100 rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src="/images/reactjs.png" width="100%" height={160} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <button className="btn btn-primary">Go</button>
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end">
                        Delete
                      </button>
                      <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }} className="btn btn-warning me-2 float-end">
                        Edit
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
