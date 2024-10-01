import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Card 1 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/dbms.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Database Management Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Database Management Systems
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/eda.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 Exploratory Data Analysis
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Exploratory Data Analysis
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/machinelearning.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1237 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Machine Learning
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/nlp.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1238 Natural Language Processing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Natural Language Processing
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/software.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1239 Software Engineering Practices
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Software Engineering Practices
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 7 */}
          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/C.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1240 C Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    C Programming
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
