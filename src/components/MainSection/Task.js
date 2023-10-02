import { MdDelete } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import "./MainSection.css";
import { useState } from "react";

export default function Task({
  taskItem,
  onTaskClick,
  taskID,
  currentSelectedTask,
  deleteTask,
}) {
  const onTaskItemClick = () => {
    onTaskClick(taskItem.taskID);
  };

  const onDeleteButtonClick = () => {
    if (
      window.confirm(`Do you want to delete the task :- ${taskItem.taskName} ?`)
    ) {
      deleteTask(taskItem.taskID);
    }
  };

  return (
    <div
      className={taskID === currentSelectedTask ? "selected-task" : "task"}
      onClick={onTaskItemClick}
    >
      <p className="task-name">{taskItem.taskName}</p>
      <div className="task-time">
        <p className="time-and-date">
          <FaRegClock size={25} color="black" />
          {taskItem.taskStartTime} to {taskItem.taskEndTime}
        </p>
        <p className="time-and-date">
          <AiFillCalendar size={25} color="black" />
          {taskItem.taskEndDate} to {taskItem.taskEndDate}
        </p>
      </div>
      <div className="delete-btn">
        {<MdDelete size={30} color="#4a384a" onClick={onDeleteButtonClick} />}
      </div>
    </div>
  );
}
