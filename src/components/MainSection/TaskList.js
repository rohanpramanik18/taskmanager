import "./MainSection.css";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import Task from "./Task";
import { useState } from "react";
import ModalForm from "./ModalForm";

export default function TaskList({
  onTaskClick,
  taskList,
  onTaskSubmit,
  currentSelectedTask,
  deleteTask,
}) {
  const [formVisibility, setFormVisibility] = useState(false);

  const onAddBtnClick = () => {
    setFormVisibility(true);
  };

  const modalClose = () => {
    setFormVisibility(false);
  };

  return (
    <div className="task-list">
      <div className="search-bar">
        <input className="search-input" type="text" size={84} />
        <button className="search-btn">
          <FiSearch size={25} color="white" />
        </button>
      </div>
      {taskList.map((task) => (
        <Task
          taskItem={task}
          key={task.taskID}
          onTaskClick={onTaskClick}
          taskID={task.taskID}
          currentSelectedTask={currentSelectedTask}
          deleteTask={deleteTask}
        />
      ))}
      <div className="task-add-btn" onClick={onAddBtnClick}>
        <MdAdd color="white" size={40} />
      </div>
      {formVisibility && (
        <ModalForm closeModal={modalClose} onTaskSubmit={onTaskSubmit} />
      )}
    </div>
  );
}
