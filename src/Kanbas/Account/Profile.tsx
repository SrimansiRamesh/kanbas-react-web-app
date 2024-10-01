import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
        <h3 className="mb-3 mt-1">Profile</h3>
        <input id="wd-username"
              placeholder="username"
              className="form-control mb-2"
              value="Alice"/>
        <input id="wd-password"
              placeholder="password" type="password"
              className="form-control mb-2"
              value="123"/>
        <input id="wd-firstname"
              placeholder="First Name"
              className="form-control mb-2"
              value="Alice"/>
        <input id="wd-lastname"
              placeholder="Last Name"
              className="form-control mb-2"
              value="Wonderland"/>
        <input id="wd-dob"
              placeholder="mm/dd/yyyy"
              className="form-control mb-2"
              type="date"/>
        <input id="wd-email"
              placeholder="abc@gmail.com"
              className="form-control mb-2"
              type="email"
              value="alice@wonderland.com"/>
        <select id="wd-role" className="form-control mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <Link id="wd-signup-btn"
              to="/Kanbas/Account/Signin"
              className="btn btn-danger w-100 mb-2">
              Sign up </Link>
      </div>
);}
