import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async() => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div
  id="wd-signin-screen"
  className="d-flex justify-content-center align-items-center vh-100 flex-column w-100"
>
  <div
    className="d-flex justify-content-center align-items-center flex-column p-5 rounded shadow"
    style={{
      backgroundColor: "#f8f9fa", // Light background to complement the white page
      width: "90%", // Responsive width
      maxWidth: "400px", // Limit the card size
    }}
  >
    <h1 className="text-dark mb-4">Sign in</h1>
    <input
      defaultValue={credentials.username}
      onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })
      }
      className="form-control mb-3"
      placeholder="Username"
      id="wd-username"
    />
    <input
      defaultValue={credentials.password}
      onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })
      }
      className="form-control mb-3"
      placeholder="Password"
      type="password"
      id="wd-password"
    />
    <div className="d-flex gap-3">
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary "
      >
        Sign in
      </button>
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="btn btn-outline-primary"
      >
        Sign up
      </Link>
    </div>
  </div>
</div>

);}
