import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchEnrolledCourses = async () => {
    try {
      const courses = await userClient.findMyCourses(currentUser);
      setEnrolledCourses(courses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };
  // useEffect(() => {
  //   fetchCourses();
  // }, []);

  useEffect(() => {
    if (currentUser) {
      fetchAllCourses();
      fetchEnrolledCourses();
    } else {
      setAllCourses([]); // Clear all courses if no user is logged in
      setEnrolledCourses([]); // Clear enrolled courses
    }
  }, [currentUser]);


 
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", img: "/images/reactjs.png", description: "New Description",
    
  });

  const fetchAllCourses=async()=>{
    try{
      const allCourses=await userClient.findAllCourses();
      setAllCourses(allCourses);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchAllCourses();
  },[]);

  const addNewCourse = async() => {
    const { _id, ...courseData } = course;
    console.log(courseData)
    const newCourse = await userClient.createCourse(courseData);
    setAllCourses([...allCourses, newCourse]);
    await fetchEnrolledCourses();
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await courseClient.deleteCourse(courseId);
  
      if (status.success) {
        setAllCourses((prevCourses) => {
          const updatedCourses = prevCourses.filter((course) => course._id !== courseId);
          console.log(updatedCourses)
          return updatedCourses;
        });
        setCourses((prevCourses) => {
          const updatedEnrolledCourses = prevCourses.filter((course) => course._id !== courseId);
          console.log(updatedEnrolledCourses)
          return updatedEnrolledCourses;
        });
        setEnrolledCourses((prevEnrolled) => prevEnrolled.filter((c) => c._id !== courseId));
      } else {
        console.error("Failed to delete course:", status.message);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setAllCourses(
      allCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    const updatedEnrolledCourses = await userClient.findMyCourses(currentUser);
      setEnrolledCourses(updatedEnrolledCourses);
  };
  
    return (
      <Session>
        <div id="wd-kanbas">
          <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
              <Routes>
                  <Route path="/" element={<Navigate to="Account" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard" element={<ProtectedRoute>
                                  <Dashboard
                                      course={course}
                                      allCourses={allCourses}
                                      enrolledCourses={enrolledCourses} 
                                      setCourse={setCourse}
                                      addNewCourse={addNewCourse}
                                      deleteCourse={deleteCourse}
                                      updateCourse={updateCourse}
                                      setEnrolledCourses={setEnrolledCourses} />
                          </ProtectedRoute>} />
                  <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
        </div>
      </Session>
      
  );}
  