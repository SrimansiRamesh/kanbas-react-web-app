import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const findAssignmentsForCourse = async (courseId: string): Promise<any[]> => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: {
    title: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
}): Promise<any> => {
    try {
      const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
      return response.data;
    } catch (error) {
      console.error(`Error creating assignment for course ${courseId}:`, error);
      throw error;
    }
};

export const updateAssignment = async (assignment: any): Promise<any> => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };

  export const deleteAssignment = async (assignmentId: string): Promise<void> => {
    await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  };