import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (  
    <div id="wd-courses-navigation" className="wd list-group fs-6 rounded-0">
    {links.map((link)=>(
      <React.Fragment key={link}>
        <Link 
        key={link} 
        to={`/Kanbas/Courses/${cid}/${link}`}
        id={`wd-course-${link.toLowerCase()}-link`}
        className={`${pathname.includes(link)?"list-group-item active border border-0":"list-group-item text-danger border border-0"}`}>
          {link}
        </Link> 
        <br/>
        </React.Fragment>
      ))}
      
    </div>
  );
}
