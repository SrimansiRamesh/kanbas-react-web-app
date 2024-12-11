import React from 'react'

interface ModalProps {
    setShowModal: (value: boolean) => void;
    newQuestion: any;
    handleNewQuestionChange: (field: string, value: any) => void;
    handleNewChoiceChange: (index: number, value: string) => void;
    handleMarkCorrect: (index: number) => void;
    handleDeleteChoice: (index: number) => void;
    handleAddChoice: () => void;
    handleSaveNewQuestion: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({
    setShowModal,
    newQuestion,
    handleNewQuestionChange,
    handleNewChoiceChange,
    handleMarkCorrect,
    handleDeleteChoice,
    handleAddChoice,
    handleSaveNewQuestion,
  }) => {
   return (
    <div className="modal show d-block bg-black bg-opacity-75" tabIndex={-1} role="dialog" >
          <div className="modal-dialog d-flex justify-content-center align-items-center vh-100" role="document">
            <div className="modal-content ">
              <div className="modal-header bg-dark text-white ">
                <h5 className="modal-title">Add New Question</h5>
                <button
                  type="button"
                  className="btn-close bg-white"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body bg-body-secondary">
                <div className="mb-3">
                  <label className="form-label">Question Type</label>
                  <select
                    className="form-select"
                    value={newQuestion.type}
                    onChange={(e) =>
                      handleNewQuestionChange("type", e.target.value)
                    }
                  >
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                    <option value="Fill in the Blank">Fill in the Blank</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Question Text</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={newQuestion.questionText}
                    onChange={(e) =>
                      handleNewQuestionChange("questionText", e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Points</label>
                  <input
                    type="number"
                    className="form-control"
                    value={newQuestion.points}
                    onChange={(e) =>
                      handleNewQuestionChange("points", parseInt(e.target.value))
                    }
                  />
                </div>

                {/* Choices */}
                {newQuestion.type === "Multiple Choice" && (
                  <div>
                    {newQuestion.choices.map((choice: any, index: number) => (
                      <div key={index} className="choice-row mb-3">
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Answer ${index + 1}`}
                            value={choice.text}
                            onChange={(e) =>
                              handleNewChoiceChange(index, e.target.value)
                            }
                          />
                          <button
                            className={`btn ${
                              choice.correct ? "btn-success" : "btn-secondary"
                            } ms-2`}
                            onClick={() => handleMarkCorrect(index)}
                          >
                            {choice.correct ? "Correct" : "Incorrect"}
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => handleDeleteChoice(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      className="btn btn-secondary bg-dark text-white mt-3"
                      onClick={handleAddChoice}
                    >
                      + Add Another Answer
                    </button>
                  </div>
                )}
                 {/* True/False */}
                 {newQuestion.type === "True/False" && (
                  <div>
                    <label className="form-label">Answer</label>
                    <select
                      className="form-select"
                      value={newQuestion.correctAnswer}
                      onChange={(e) =>
                        handleNewQuestionChange("correctAnswer", e.target.value)
                      }
                    >
                      <option value="True">True</option>
                      <option value="False">False</option>
                    </select>
                  </div>
                )}

                {/* Fill in the Blank */}
                {newQuestion.type === "Fill in the Blank" && (
                  <div>
                    <label className="form-label">Correct Answer</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Correct answer"
                      value={newQuestion.correctAnswer || ""}
                      onChange={(e) =>
                        handleNewQuestionChange("correctAnswer", e.target.value)
                      }
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer bg-body-secondary">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSaveNewQuestion}
                >
                  Save Question
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Modal