import React, { useState } from 'react';
import MultipleChoiceEditor from './MulipleChoiceEditor';
// import TrueFalseEditor from './QuestionTypes/TrueFalseEditor';
// import FillInTheBlankEditor from './QuestionTypes/FillInTheBlankEditor';
interface Question {
    type: string; 
    questionText: string;
    points: number;
    choices?: { text: string; isCorrect: boolean }[]; 
    correctAnswer: string ;
  }
  interface QuestionEditorProps {
    question: Question;             // The question to edit (or create if it's new)
    onSave: (updatedQuestion: Question) => void;  // Function to save the updated question
    onCancel: () => void;           // Function to cancel the editing and return to the list
  }
  const QuestionEditor: React.FC<QuestionEditorProps> = ({ question, onSave, onCancel }) => {
    const [type, setType] = useState(question.type || 'Multiple Choice');

  const renderEditor = () => {
    switch (type) {
      case 'Multiple Choice':
        return <MultipleChoiceEditor question={question} onSave={onSave} onCancel={onCancel} />;
    //   case 'True/False':
    //     return <TrueFalseEditor question={question} onSave={onSave} onCancel={onCancel} />;
    //   case 'Fill in the Blank':
    //     return <FillInTheBlankEditor question={question} onSave={onSave} onCancel={onCancel} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Multiple Choice</option>
        <option>True/False</option>
        <option>Fill in the Blank</option>
      </select>
      {renderEditor()}
    </div>
  );
};

export default QuestionEditor;
