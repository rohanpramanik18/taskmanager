import { FaRegClock } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";

export default function TaskDetails({ taskID, taskList }) {
  if (taskID === "0") {
    console.log("Idhar ");
    return <div className="task-details"></div>;
  }
  const selectedTask = taskList.filter((task) => task.taskID === taskID);
  console.log("Idhar uske niche");
  return (
    <div className="task-details">
      <div className="task-details-container">
        <p className="task-details-name">{selectedTask[0].taskName}</p>
        <p className="task-details-desc">{selectedTask[0].taskDesc}</p>
        <div className="task-time">
          <p className="time-and-date-details">
            <FaRegClock size={25} color="white" />
            {selectedTask[0].taskStartTime} to {selectedTask[0].taskEndTime}
          </p>
          <p className="time-and-date-details">
            <AiFillCalendar size={25} color="white" />
            {selectedTask[0].taskEndDate} to {selectedTask[0].taskEndDate}
          </p>
        </div>
      </div>
    </div>
  );
}
