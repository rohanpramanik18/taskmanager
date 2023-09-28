import { useEffect, useState } from "react";
import "./MainSection.css";

export default function ModalForm({ closeModal, onTaskSubmit }) {
  const [userInput, setUserInput] = useState({
    taskName: "",
    taskDesc: "",
    taskStartTime: "",
    taskEndTime: "",
    taskStartDate: "",
    taskEndDate: "",
  });

  useEffect(() => console.log(userInput), [userInput]);

  const onTaskNameChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskName: event.target.value,
    }));
  };

  const onTaskDescChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskDesc: event.target.value,
    }));
  };

  const onTaskSTChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskStartTime: event.target.value,
    }));
  };

  const onTaskETChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskEndTime: event.target.value,
    }));
  };

  const onTaskSDChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskStartDate: event.target.value,
    }));
  };

  const onTaskEDChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      taskEndDate: event.target.value,
    }));
  };

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-form" onClick={(e) => e.stopPropagation()}>
        <form>
          <div className="form-field">
            <label className="form-label">Task name</label>
            <input className="form-input" onChange={onTaskNameChange}></input>
          </div>
          <div className="form-field">
            <label className="form-label">Task description</label>
            <textarea
              className="form-input"
              rows="5"
              onChange={onTaskDescChange}
            ></textarea>
          </div>
          <div className="time-and-date-input">
            <div className="form-field">
              <label className="form-label">Task start time</label>
              <input
                className="form-input"
                type="time"
                onChange={onTaskSTChange}
              ></input>
            </div>
            <div className="form-field">
              <label className="form-label">Task end time</label>
              <input
                className="form-input"
                type="time"
                onChange={onTaskETChange}
              ></input>
            </div>
          </div>
          <div className="time-and-date-input">
            <div className="form-field">
              <label className="form-label">Task start date</label>
              <input
                className="form-input"
                type="date"
                onChange={onTaskSDChange}
              ></input>
            </div>
            <div className="form-field">
              <label className="form-label">Task end date</label>
              <input
                className="form-input"
                type="date"
                onChange={onTaskEDChange}
              ></input>
            </div>
          </div>
          <div className="form-btn">
            <div className="form-btn-text" onClick={closeModal}>
              Close
            </div>
            <div
              className="form-btn-text"
              onClick={() => onTaskSubmit(userInput)}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
