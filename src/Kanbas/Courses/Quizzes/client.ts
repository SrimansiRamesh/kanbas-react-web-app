import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const findQuizzesForCourse = async (courseId: string): Promise<any[]> => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};
export const createQuiz = async (courseId: string, quiz: {
    title: string;
    description: string;
    type:string;
    points: number;
    assignmentGroup:string;
    shuffleAnswers:boolean;
    timeLimit:number;
    multipleAttempts:boolean;
    showCorrectAnswers:string;
    accessCode:string;
    oneQuestionAtATime:boolean;
    webcamRequired:boolean;
    lockQuestionsAfterAnswering:boolean;
    dueDate: string;
    availableDate: string;
    untilDate: string;
}): Promise<any> => {
    try {
      const response = await axios.post(`${QUIZZES_API}/${courseId}/quizzes`, quiz);
      return response.data;
    } catch (error) {
      console.error(`Error creating quiz for course ${courseId}:`, error);
      throw error;
    }
};

export const updateQuiz = async (quiz: any): Promise<any> => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId: string): Promise<void> => {
  await axios.delete(`${QUIZZES_API}/${quizId}`);
};