import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCalendarSolid, LiaCogSolid, LiaInboxSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/Logo.png" width="75px" /></a>
        
        <Link to="/Kanbas/Account" id="wd-account-link"
        className={`${pathname.includes("Account")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <FaRegCircleUser className={` ${pathname.includes("Account")? "fs-1 text-danger bg-white" : "fs-1 text-white bg-black" }`}/><br />
        Account </Link>

        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`${pathname.includes("Dashboard")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>

        <Link to="/Kanbas/Courses" id="wd-course-link"
        className={`${pathname.includes("Courses")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>

        <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className={` ${pathname.includes("Calendar")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <LiaCalendarSolid className="fs-1 text-danger" /><br />
        Calendar </Link>

        <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`${pathname.includes("Inbox")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <LiaInboxSolid className="fs-1 text-danger" /><br />
        Inbox </Link>


        <Link to="/" id="wd-labs-link"
        className={`${pathname.includes("Labs")?"list-group-item text-center border-0 bg-white text-danger":"list-group-item text-center border-0 bg-black text-white"}`}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs </Link>
    </div>
    );
}