export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your web application running on Netlify The landing page should include the following: Your full name and section  links to the labs assignment and kanbas assignment. Links to all source code repositories. Kanbas application should have a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-points">Points </label>
              <input id="wd-points" value={100} />
            </td>
            </tr><br />
            <tr>
                <td align="left" valign="top">
                <label htmlFor="wd-group">Assignment Group </label>
                <select id="wd-group">
                    <option selected value="Assignments">ASSIGNMENTS</option>
                    <option value="QUIZES">QUIZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECTS">PROJECTS</option>
                </select>
                </td>
            </tr><br />
            <tr>
                <td align="left" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As </label>
                <select id="wd-display-grade-as">
                    <option selected value="Percentage">PERCENTAGE</option>
                    <option value="GPA">GPA</option>
                    <option value="SCORES">SCORES</option>
                </select>
                </td>
            </tr><br />
            <tr>
                <td align="left" valign="top">
                <label htmlFor="wd-submission-type">Submission Type </label>
                <select id="wd-submission-type">
                    <option selected value="Online">ONLINE</option>
                    <option value="offline">OFFLINE</option>
                </select>
                </td>
            </tr>
            

            
            <h2>Online Entry Options</h2>
            <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="check-website-entry" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-student-annotation">Student Annotations</label><br/>
            <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/><br />

            <tr>
                <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign Assign to  </label>
                <input id="wd-points" type="text" value="Everyone" />
                </td>
            </tr>
            <br />
            <tr>
                <td align="center" valign="top">
                <label htmlFor="wd-due-date">Due date  </label>
                <input id="wd-due-date" type="date" value="2024-05-13"/>
                </td>
            </tr>
            <br />
            <tr>
                <td align="center" valign="top">
                <label htmlFor="wd-available-from">Available From</label>&emsp;&emsp;&emsp;&emsp;
                <label htmlFor="wd-available-until">  Until  </label>
                </td>
            </tr>

            <tr>
                <td align="center" valign="middle">
                <input id="wd-available-from" type="date" value="2024-05-13"/>&emsp;&emsp;
                <input id="wd-available-until" type="date" value="2024-05-13"/>
                </td>
            </tr>
            <hr />
            <tr>
                <td align="right">
                    <button id="wd-name">Save</button>&emsp;
                    <button id="wd-name">Cancel</button>
                </td>
            </tr>
            
          
          
        </table>
      </div>
  );}
  