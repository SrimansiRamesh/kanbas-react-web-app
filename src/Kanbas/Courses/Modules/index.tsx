export default function Modules() {
    return (
      <div>
        <button id="wd-collapse-all" onClick={() => alert("Collapsed")} type="button">
                    Collapse All
        </button>
        <button id="wd-view-progress" onClick={() => alert("Progress")} type="button">
                    View Progress
        </button>
        
        <select id="wd-select-one-category">
            <option selected value="Publish All">Publish All</option>
            <option value="Publish Selected">Publish Selected</option>x
        </select>
        <button id="wd-module" onClick={() => alert("Modules")} type="button">
                    +Module
        </button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1- Course Introduction, Syllabus, agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1- Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 1- Creating Us</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to web development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a REACT application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy assignments to NETLIFY</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and DOM</li>
                  <li className="wd-content-item">Formatting web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  