import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const USERS_API = `${REMOTE_SERVER}/api/users`;  
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  console.log("Signin");
  console.log(response.data);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  console.log("Signup");
  console.log(response.data);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const profile = async () => {
  console.log("profile in client");
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  console.log("profile in client");
  console.log(response.data);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const findMyCourses = async (user:any) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/${user._id}/courses`);
  return data;
};

export const findAllCourses=async()=>{
  const {data}=await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses`);
  return data;
}

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const enrollUser = async (data: { courseId: string; userId: string }) => {
  console.log("Payload sent to enrollUser:", data); // Debugging
  const response = await axios.post(`${ENROLLMENTS_API}`, data);
  return response.data;
};

export const unenrollUser = async (unenrollment: { userId: string; courseId: string }) => {
  const response = await axios.delete(ENROLLMENTS_API, { data: unenrollment });
  return response.data;
};


