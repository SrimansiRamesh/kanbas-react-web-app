import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="ms-3">
      <h3 className="mb-3 mt-1">Signin</h3>
      <input id="wd-username"
             placeholder="username"
             className="form-control mb-3"/>
      <input id="wd-password"
             placeholder="password" type="password"
             className="form-control mb-3"/>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100 mb-3">
            Sign in </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="mb-3">Sign up</Link>
    </div>
);}
