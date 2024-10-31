import { useSelector } from "react-redux";

export default function ProtectedRouteCoursePage({ 
    children, 
courseId, }: { children: any; courseId: string;}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

    const isEnrolled = enrollments.some(
        (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === courseId
    )

    if (!isEnrolled) {
        return <button className="btn btn-primary"> Go </button>
    }
    else {
        return children;
    }
}