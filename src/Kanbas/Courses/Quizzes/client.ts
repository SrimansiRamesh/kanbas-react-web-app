import axios from "axios";
import mongoose from "mongoose";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUESTIONS_API=`${REMOTE_SERVER}/api/questions`;
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

export const createQuestion = async (quizId: string, question: {
  type:string;
  questionText:string;
  points: number;
  choices?: { text: string; isCorrect: boolean }[];
  correctAnswer:string;
}): Promise<any> => {
  try {
    const response = await axios.post(`${QUIZZES_API}/${quizId}/question`, question);
    return response.data;
  } catch (error) {
    console.error(`Error creating question for course ${quizId}:`, error);
    throw error;
  }
};

export const updateQuestion = async (question: any) => {
  try {
    const { data } = await axiosWithCredentials.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
  } catch (error) {
    // Handle error (log or rethrow)
    console.error('Error updating question:', error);
    throw error;
  }
};
export const findQuestionsForQuiz = async (quizId: string): Promise<any[]> => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

export const deleteQuestion = async (questionId: string): Promise<void> => {
  await axios.delete(`${QUESTIONS_API}/${questionId}`);
};

export const createAttempt = async (quizId: string, userID: string, attempt: {
  attemptNumber: number;
  answers: { question: string; selectedAnswer: string; correct: Boolean  }[]; // Array of answers
  score: number; // Total score
  completedAt: Date;
}): Promise<any> => {
  try {
    console.log(attempt);
    const response = await axios.post(`${QUIZZES_API}/${quizId}/attempt`, {
      ...attempt,
      student: userID,  // Include the student (user) ID in the request body
    });
    return response.data;
  } catch (error) {
    console.error(`Error creating attempt for quiz ${quizId}:`, error);
    throw error;
  }
};
