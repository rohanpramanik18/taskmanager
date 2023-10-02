import { useState } from "react";
import "./MainSection.css";
export default function SubtaskModal({ closeModal, onSubtaskAdd, taskID }) {
  const [userStInput, setUserStInput] = useState("");
  const onSubtaskChange = (event) => {
    setUserStInput(event.target.value);
  };

  const onSubtaskAddClick = () => {
    onSubtaskAdd(taskID, userStInput);
    closeModal();
  };
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="subtask-modal-form" onClick={(e) => e.stopPropagation()}>
        <form>
          <div className="form-field">
            <label className="form-label">Subtask name</label>
            <input className="form-input" onChange={onSubtaskChange}></input>
          </div>
          <div className="form-btn">
            <div className="form-btn-text" onClick={closeModal}>
              Close
            </div>
            <div className="form-btn-text" onClick={onSubtaskAddClick}>
              Add
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
