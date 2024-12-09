import React, { useState } from 'react';
import QuestionEditor from './QuestionEditor';
interface Question {
    type: string; 
    questionText: string;
    points: number;
    choices?: { text: string; isCorrect: boolean }[]; 
    correctAnswer: string ;
  }
interface QuestionListProps {
    questions: Question[]; // Array of questions
    onAddQuestion: (newQuestion: Question) => void; // Function to add a question
    onUpdateQuestion: (index:any,updatedQuestion: Question) => void; // Function to update a question
  }
  const QuestionList: React.FC<QuestionListProps> = ({ questions, onAddQuestion, onUpdateQuestion }) => {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <div>
      <button onClick={() => setEditingIndex(questions.length)}>+ New Question</button>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            {q.questionText} ({q.points} pts)
            <button onClick={() => setEditingIndex(index)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingIndex !== null && (
        <QuestionEditor
          question={questions[editingIndex] || {}}
          onSave={(updatedQuestion:Question) => {
            if (editingIndex === questions.length) {
              onAddQuestion(updatedQuestion);
            } else {
              onUpdateQuestion(editingIndex, updatedQuestion);
            }
            setEditingIndex(null);
          }}
          onCancel={() => setEditingIndex(null)}
        />
      )}
    </div>
  );
};

export default QuestionList;
