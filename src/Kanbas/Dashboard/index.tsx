import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course one */}
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        {/* Course two */}
        <div className="wd-dashboard-course">
          <img src="/images/dbms.jpg" width={200} />
            <div>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1235/Home">
                CS1235 Database Management Systems
              </Link>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
            </div>
        </div>
        {/* Course three */}
        <div className="wd-dashboard-course"> 
          <img src="/images/nlp.png" width={200} />
              <div>
                <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1236/Home">
                  CS1236 Natural Language Processing
                </Link>
                <p className="wd-dashboard-course-title">
                  Natural Language Processing
                </p>
                <Link to="/Kanbas/Courses/1236/Home"> Go </Link>
              </div>
        </div>
        {/* Course four */}
        <div className="wd-dashboard-course"> 
          <img src="/images/machinelearning.png" width={200} />
              <div>
                <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1237/Home">
                  CS1237 Machine Learning
                </Link>
                <p className="wd-dashboard-course-title">
                  Machine Learning
                </p>
                <Link to="/Kanbas/Courses/1237/Home"> Go </Link>
              </div>
        </div>
        {/* Course five */}
        <div className="wd-dashboard-course"> 
          <img src="/images/eda.png" width={200} />
              <div>
                <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1238/Home">
                  CS1238 Exploratory Data Analysis
                </Link>
                <p className="wd-dashboard-course-title">
                  Exploratory Data Analysis
                </p>
                <Link to="/Kanbas/Courses/1238/Home"> Go </Link>
              </div>
        </div>
        {/* Course six */}
        <div className="wd-dashboard-course"> 
          <img src="/images/software.png" width={200} />
              <div>
                <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1239/Home">
                  CS1239 Software development
                </Link>
                <p className="wd-dashboard-course-title">
                Software development
                </p>
                <Link to="/Kanbas/Courses/1239/Home"> Go </Link>
              </div>
        </div>
      </div>
    </div>
  );
}
