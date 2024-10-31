// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import * as db from "../Databases";

// export default function Dashboard(
//   { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
//     courses: any[]; course: any; setCourse: (course: any) => void;
//     addNewCourse: () => void; deleteCourse: (course: any) => void;
//     updateCourse: () => void;
//   }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;

//   // State to toggle enrollment filter
//   const [showEnrolled, setShowEnrolled] = useState(false);

//   // Get list of enrolled courses for the current user
//   const enrolledCourses = enrollments
//     .filter((enrollment: any) => enrollment.user === currentUser._id)
//     .map((enrollment: any) => enrollment.course);

//   // Filter courses based on enrollment toggle
//   const displayedCourses = showEnrolled
//     ? courses.filter(course => enrolledCourses.includes(course._id))
//     : courses;

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>
//         New Course
//         <button className="btn btn-primary float-end"
//                 onClick={addNewCourse}> Add </button>
//         <button className="btn btn-warning float-end me-2"
//                 onClick={updateCourse}> Update </button>
//       </h5>
//       <br />
//       <input value={course.name} className="form-control mb-2"
//              onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//       <textarea value={course.description} className="form-control"
//                 onChange={(e) => setCourse({ ...course, description: e.target.value })} />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) =>
//         enrollments.some(
//           (enrollment) =>
//             enrollment.user === currentUser._id &&
//             enrollment.course === course._id
//         )).length})</h2>
//       <hr />
//       <button
//         className="btn btn-info mb-3"
//         onClick={() => setShowEnrolled(prev => !prev)}>
//         {showEnrolled ? "Show All Courses" : "Show Enrolled Courses"}
//       </button>
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {displayedCourses.map((course) => (
//             <div key={course._id} className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
//               <div className="card h-100 rounded-3 overflow-hidden">
//                 <Link
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                   to={`/Kanbas/Courses/${course._id}/Home`}>
//                   <img src="/images/reactjs.png" width="100%" height={160} />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {course.name}
//                     </h5>
//                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                       {course.description}
//                     </p>
//                     <div className="mt-auto">
//                       <button className="btn btn-primary">Go</button>
//                       <button onClick={(event) => {
//                         event.preventDefault();
//                         deleteCourse(course._id);
//                       }} className="btn btn-danger float-end">
//                         Delete
//                       </button>
//                       <button onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }} className="btn btn-warning me-2 float-end">
//                         Edit
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import * as db from "../Databases";

// export default function Dashboard(
//   { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
//     courses: any[]; course: any; setCourse: (course: any) => void;
//     addNewCourse: () => void; deleteCourse: (course: any) => void;
//     updateCourse: () => void;
//   }) {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;
//   console.log(currentUser);
//   // State to toggle enrollment filter
//   const [showEnrolled, setShowEnrolled] = useState(false);
//   const isFaculty = currentUser?.role === "FACULTY";
//   // Get list of enrolled courses for the current user
//   const enrolledCourses = enrollments
//     .filter((enrollment: any) => enrollment.user === currentUser._id)
//     .map((enrollment: any) => enrollment.course);

//   // Filter courses based on enrollment toggle
//   const displayedCourses = showEnrolled
//     ? courses.filter(course => enrolledCourses.includes(course._id))
//     : courses;

//   // Handler for enrolling and unenrolling
//   const handleEnroll = (courseId:any) => {
//     // Logic to enroll the student
//     dispatch({ type: "enroll", payload: { userId: currentUser._id, courseId } });
//   };

//   const handleUnenroll = (courseId:any) => {
//     // Logic to unenroll the student
//     dispatch({ type: "unenroll", payload: { userId: currentUser._id, courseId } });
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5>
//         New Course
//         <button className="btn btn-primary float-end" onClick={addNewCourse}> Add </button>
//         <button className="btn btn-warning float-end me-2" onClick={updateCourse}> Update </button>
//       </h5>
//       <br />
//       <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//       <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />

//       {/* Enrollments toggle button */}
      
//       {currentUser.role === "STUDENT" && (
//         <button
//           className="btn btn-info mb-3"
//           onClick={() => setShowEnrolled(prev => !prev)}>
//           {showEnrolled ? "All Courses" : "Enrolled Courses"}
//         </button>
//       )}

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {displayedCourses.map((course) => (
//             <div key={course._id} className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
//               <div className="card h-100 rounded-3 overflow-hidden">
//                 <Link
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                   to={`/Kanbas/Courses/${course._id}/Home`}>
//                   <img src="/images/reactjs.png" width="100%" height={160} />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {course.name}
//                     </h5>
//                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                       {course.description}
//                     </p>
//                     <div className="mt-auto">
//                       <button className="btn btn-primary">Go</button>
//                       {isFaculty &&
//                       <button onClick={(event) => {
//                         event.preventDefault();
//                         deleteCourse(course._id);
//                       }} className="btn btn-danger float-end">
//                         Delete
//                       </button>}
//                       {isFaculty &&
//                       <button onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }} className="btn btn-warning me-2 float-end">
//                         Edit
//                       </button>}
//                       {/* Enroll/Unenroll button */}
//                       {currentUser.role === "STUDENT" && (
//                         enrolledCourses.includes(course._id) ? (
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               handleUnenroll(course._id);
//                             }}
//                             className="btn btn-danger float-end me-2">
//                             Unenroll
//                           </button>
//                         ) : (
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               handleEnroll(course._id);
//                             }}
//                             className="btn btn-success float-end me-2">
//                             Enroll
//                           </button>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
// import { enrollCourse, unenrollCourse } from "./EnrollmentsSlice";
// import * as db from "../Databases";
// type Course = {
//   _id: string;
//   name: string;
//   description: string;
// };
// type DashboardProps = {
//   courses: Course[];
//   course: Course;
//   setCourse: (course: Course) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// };
// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: DashboardProps) {
//   const { currentUser } = useSelector((state:any) => state.accountReducer);
//   const { enrolledCourses } = useSelector((state:any) => state.enrollment);
//   const [showEnrolled, setShowEnrolled] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isStudent = currentUser.role === "Student";
  
//   const displayedCourses = showEnrolled
//     ? courses.filter((course: { _id: any; }) => enrolledCourses.includes(course._id))
//     : courses;

//   const handleEnrollmentToggle = (courseId: any) => {
//     if (enrolledCourses.includes(courseId)) {
//       dispatch(unenrollCourse(courseId));
//     } else {
//       dispatch(enrollCourse(courseId));
//     }
//   };

//   const handleCourseAccess = (courseId: any) => {
//     if (enrolledCourses.includes(courseId) || currentUser.role !== "Student") {
//       navigate(`/Kanbas/Courses/${courseId}/Home`);
//     } else {
//       alert("You need to enroll in this course to access it.");
//     }
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1>Dashboard</h1>
//       <button className="btn btn-info mb-3" onClick={() => setShowEnrolled(!showEnrolled)}>
//         {showEnrolled ? "Show All Courses" : "Show Enrolled Courses"}
//       </button>
//       <div id="wd-dashboard-courses" className="row">
//         {displayedCourses.map((course: { _id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
//           <div key={course._id} className="col">
//             <div className="card">
//               <img src="/images/reactjs.png" className="card-img-top" alt="Course" />
//               <div className="card-body">
//                 <h5>{course.name}</h5>
//                 <p>{course.description}</p>
//                 <button className="btn btn-primary" onClick={() => handleCourseAccess(course._id)}>Go</button>
//                 {isStudent && (
//                   enrolledCourses.includes(course._id) ? (
//                     <button
//                       className="btn btn-danger ms-2"
//                       onClick={() => handleEnrollmentToggle(course._id)}>
//                       Unenroll
//                     </button>
//                   ) : (
//                     <button
//                       className="btn btn-success ms-2"
//                       onClick={() => handleEnrollmentToggle(course._id)}>
//                       Enroll
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { enrollCourse, unenrollCourse } from "./EnrollmentsSlice"; // Adjust the import path accordingly
// import { useState } from "react";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.EnrollmentsReducer); // Access enrollments from the store
//   const dispatch = useDispatch();

//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT"; // Check if user is a student
//   const [showAllCourses, setShowAllCourses] = useState(false); // State to toggle course view

//   const toggleCourses = () => setShowAllCourses(!showAllCourses); // Toggle course view

//   const handleEnroll = (courseId: string) => {
//     dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
//   };

//   const handleUnenroll = (courseId: string) => {
//     dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
//   };

  
//   const displayedCourses = showAllCourses ? courses : courses.filter(course =>
//     enrollments.some((enrollment: any) => enrollment.course === course._id)
//   );

//   const filteredCourses = courses.filter(course => enrollments);
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {/* Render New Course Form and buttons only if user is FACULTY */}
//       {isFaculty && (
//         <>
//           <h5 className="m-2">
//             New Course{" "}
//             <button className="btn btn-primary float-end m-2" onClick={addNewCourse}>
//               Add
//             </button>
//             <button className="btn btn-warning float-end m-2" onClick={updateCourse}>
//               Update
//             </button>
//           </h5>
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//           <hr />
//         </>
//       )}

//       {/* Enrollment Button for Students */}
//       {isStudent && (
//         <button className="btn btn-info float-end" onClick={toggleCourses}>
//           {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
//         </button>
//       )}

//       <h2 id="wd-dashboard-published">
//         Courses ({isFaculty ? filteredCourses.length : displayedCourses.length})
//       </h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
          
//         {(isFaculty ? filteredCourses : displayedCourses).map((course) => (
//   <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//     <div className="card rounded-3 overflow-hidden h-100">
//       <Link
//         to={`/Kanbas/Courses/${course._id}/Home`}
//         className="wd-dashboard-course-link text-decoration-none text-dark"
//       >
//         <img src={course.img} width="100%" height={160} alt={course.name} />
//         <div className="card-body">
//           <h5 className="wd-dashboard-course-title card-title" style={{ maxHeight: "3rem", minHeight: "3rem", overflowY: "hidden" }}>
//             {course.name}
//           </h5>
//           <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: "100px", minHeight: "100px", overflowY: "hidden" }}>
//             {course.description}
//           </p>
//           <button className="btn btn-primary">Go</button>
//           {isFaculty && (
//             <>
//               <button onClick={(event) => {
//                 event.preventDefault();
//                 deleteCourse(course._id);
//               }} className="btn btn-danger float-end">
//                 Delete
//               </button>

//               <button onClick={(event) => {
//                 event.preventDefault();
//                 setCourse(course);
//               }} className="btn btn-warning me-2 float-end">
//                 Edit
//               </button>
//             </>
//           )}

//           {/* Render Enroll and Unenroll buttons for Students */}
//           {isStudent && (
//             enrollments.some((enrollment: any) => enrollment.course === course._id) ? (
//               <button
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleUnenroll(course._id);
//                 }}
//                 className="btn btn-danger float-end"
//               >
//                 Unenroll
//               </button>
//             ) : (
//               <button
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleEnroll(course._id);
//                 }}
//                 className="btn btn-success float-end"
//               >
//                 Enroll
//               </button>
//             )
//           )}
//         </div>
//       </Link>
//     </div>
//   </div>
// ))}

          
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./EnrollmentsSlice"; 
import { useState } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.EnrollmentsReducer); 
  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT"; 
  const [showAllCourses, setShowAllCourses] = useState(false); 

  const toggleCourses = () => setShowAllCourses(!showAllCourses); 

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
  };

  const displayedCourses = showAllCourses ? courses : courses.filter(course =>
    enrollments.some((enrollment: any) => enrollment.course === course._id)
  );

  const filteredCourses = courses.filter(course => enrollments);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5 className="m-2">
            New Course{" "}
            <button className="btn btn-primary float-end m-2" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end m-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      {isStudent && (
        <button className="btn btn-info float-end" onClick={toggleCourses}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Courses ({isFaculty ? filteredCourses.length : displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(isFaculty ? filteredCourses : displayedCourses).map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden h-100">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.img} width="100%" height={160} alt={course.name} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title" style={{ maxHeight: "3rem", minHeight: "3rem", overflowY: "hidden" }}>
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: "100px", minHeight: "100px", overflowY: "hidden" }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    {isFaculty && (
                      <>
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
                      </>
                    )}
                    {isStudent && (
                      enrollments.some((enrollment: any) => enrollment.course === course._id) ? (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                          className="btn btn-success float-end"
                        >
                          Enroll
                        </button>
                      )
                    )}
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
