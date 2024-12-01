import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
      <div id="wd-account-navigation" className="wd list-group fs-6 rounded-0 mr-3">
        {currentUser ? (
          <Link 
          to="/Kanbas/Account/Profile" id="wd-course-home-link"
          className={`${pathname.includes("Profile")?"list-group-item active border border-0":"list-group-item text-danger border border-0"}`}>
            Profile
          </Link>):(
            <>
               <Link to="/Kanbas/Account/Signin" id="wd-course-home-link"
               className={`${pathname.includes("Signin")?"list-group-item active border border-0":"list-group-item text-danger border border-0"}`}>Sign In</Link><br/>
              <Link to="/Kanbas/Account/Signup" id="wd-course-home-link"
                className={`${pathname.includes("Signup")?"list-group-item active border border-0":"list-group-item text-danger border border-0"}`}>Sign Up</Link><br/>  
            </>
          )}

        {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`${pathname.includes("Users")?"list-group-item active border border-0":"list-group-item text-danger border border-0"}`}> Users </Link> )}

      </div>
);}


// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// export default function AccountNavigation() {
//  const { currentUser } = useSelector((state: any) => state.accountReducer);
//  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//  const active = (path: string) => (pathname.includes(path) ? "active" : "");
//  const { pathname } = useLocation();
//  return (
//    <div id="wd-account-navigation" className="list-group">
//      {links.map((link) => (
//        <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
//      ))}
//      {currentUser && currentUser.role === "ADMIN" && (
//        <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
//    </div>
// );}
