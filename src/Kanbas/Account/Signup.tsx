import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="ms-3">
      <h3 className="mb-3 mt-1">Sign up</h3>
      <input id="wd-username"
             placeholder="username"
             className="form-control mb-3"/>
      <input id="wd-password"
             placeholder="password" type="password"
             className="form-control mb-3"/>
      <input id="wd-verify-password"
             placeholder="password" type="password"
             className="form-control mb-3"/>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100 mb-3">
            Sign up </Link>
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
