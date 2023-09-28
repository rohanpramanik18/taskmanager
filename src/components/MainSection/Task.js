import { MdDelete } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import "./MainSection.css";
import { useState } from "react";

export default function Task({ taskItem, onTaskClick }) {
  const [isSelectedTask, setIsSelecetedTask] = useState(false);

  const onTaskItemClick = () => {
    onTaskClick(taskItem.taskID);
    setIsSelecetedTask((prevState) => (prevState ? false : true));
  };

  return (
    <div
      className={isSelectedTask ? "selected-task" : "task"}
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
      <div className="delete-btn">{<MdDelete size={30} color="#4a384a" />}</div>
    </div>
  );
}
