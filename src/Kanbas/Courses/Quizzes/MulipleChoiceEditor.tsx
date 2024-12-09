import React, { useState, useEffect } from 'react';

interface Question {
    type: string; 
    questionText: string;
    points: number;
    choices?: { text: string; isCorrect: boolean }[]; 
    correctAnswer: string ;
  }
interface MultipleChoiceEditorProps {
  question: Question; // The question to edit (or create if it's new)
  onSave: (updatedQuestion: Question) => void; // Function to save the updated question
  onCancel: () => void; // Function to cancel the editing and return to the list
}

const MultipleChoiceEditor: React.FC<MultipleChoiceEditorProps> = ({ question, onSave, onCancel }) => {
  // Initial state setup
  const [questionText, setquestionText] = useState(question.questionText || '');
  const [points, setPoints] = useState<number>(question.points || 0);
  const [choices, setChoices] = useState<{ text: string; isCorrect: boolean }[]>(
    question.choices || [{ text: '', isCorrect: false }]
  );
  const [correctAnswer, setCorrectAnswer] = useState<number>(question.correctAnswer ? Number(question.correctAnswer) : -1);

  // Function to add a new choice
  const addChoice = () => setChoices([...choices, { text: '', isCorrect: false }]);

  // Function to update the text or correctness of a choice
  const updateChoice = (index: number, value: { text: string; isCorrect: boolean }) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  useEffect(() => {
    // If no initial `choices` are provided, ensure we have one default choice
    if (choices.length === 0) {
      setChoices([{ text: '', isCorrect: false }]);
    }
  }, [choices]);

  return (
    <div>
      {/* Title Input */}
      <input
        value={questionText}
        onChange={(e) => setquestionText(e.target.value)}
        placeholder="Title"
      />

      {/* Points Input */}
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
        placeholder="Points"
      />

      {/* Choices Inputs */}
      {choices.map((choice, index) => (
        <div key={index}>
          <input
            type="text"
            value={choice.text}
            onChange={(e) =>
              updateChoice(index, { text: e.target.value, isCorrect: choice.isCorrect })
            }
            placeholder={`Choice ${index + 1}`}
          />
          <input
            type="radio"
            checked={correctAnswer === index}
            onChange={() => setCorrectAnswer(index)} // Set the correct answer to this index
          />
          <label>Correct Answer</label>
        </div>
      ))}

      {/* Button to add a new choice */}
      <button onClick={addChoice}>+ Add Choice</button>

      {/* Cancel and Save Buttons */}
      <button onClick={onCancel}>Cancel</button>
      <button
        onClick={() =>
          onSave({
            type: 'Multiple Choice',
            questionText,
            points,
            choices,
            correctAnswer: String(correctAnswer), // Store the index of correct answer
          })
        }
      >
        Save
      </button>
    </div>
  );
};

export default MultipleChoiceEditor;
