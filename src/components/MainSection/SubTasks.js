import { useState } from "react";
import "./MainSection.css";
import { MdAdd } from "react-icons/md";
import SubtaskModal from "./SubtaskModal";

export default function SubTasks({ taskID, subTaskList, onSubtaskAdd }) {
  const [subtaskFormVisibility, setSubtaskFormVisibility] = useState(false);

  const closeModal = () => {
    setSubtaskFormVisibility(false);
  };

  const onAddBtnClick = () => {
    setSubtaskFormVisibility(true);
  };

  const abc = subTaskList.filter((task) => task.taskID === taskID);
  if (taskID === "0" || abc.length === 0) {
    return (
      <div className="sub-tasks">
        <p className="task-name-st">Subtasks :- </p>
        <p className="task-details-desc">
          {taskID === "0"
            ? "Select a task"
            : "No sub tasks found for this task"}
        </p>
        {taskID !== "0" && (
          <MdAdd
            color="white"
            size={40}
            className="subtask-add-btn"
            onClick={onAddBtnClick}
          />
        )}
        {subtaskFormVisibility && (
          <SubtaskModal
            closeModal={closeModal}
            onSubtaskAdd={onSubtaskAdd}
            taskID={taskID}
          />
        )}
      </div>
    );
  }

  let i = 0;
  return (
    <div className="sub-tasks">
      <p className="task-name-st">Subtasks :- </p>
      {abc[0].subTasks.map((subTask) => {
        ++i;
        return (
          <p key={i} style={{ color: "white" }}>
            {i}) {subTask}
          </p>
        );
      })}
      <MdAdd
        color="white"
        size={40}
        className="subtask-add-btn"
        onClick={onAddBtnClick}
      />
      {subtaskFormVisibility && (
        <SubtaskModal
          closeModal={closeModal}
          onSubtaskAdd={onSubtaskAdd}
          taskID={taskID}
        />
      )}
    </div>
  );
}
