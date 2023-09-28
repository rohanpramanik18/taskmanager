import { FiCloudLightning } from "react-icons/fi";
import "./MainSection.css";
import SubTasks from "./SubTasks";
import TaskDetails from "./TaskDetails";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";

export default function MainSection() {
  const [taskList, setTaskList] = useState([
    {
      taskID: "t1",
      taskName: "Beach clean-up",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
    {
      taskID: "t2",
      taskName: "Beach clean-up bjjwb  n ciohwhciwj ichwih",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
    {
      taskID: "t3",
      taskName: "Beach clean-up",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
    {
      taskID: "t4",
      taskName: "Beach clean-up",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
    {
      taskID: "t5",
      taskName: "Beach clean-up",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
    {
      taskID: "t6",
      taskName: "Beach clean-up",
      taskDesc: "Cleaning the plastic waste from the beaches",
      taskStartDate: "12-10-2023",
      taskStartTime: "08:35",
      taskEndDate: "14-10-2023",
      taskEndTime: "14:00",
    },
  ]);

  const onTaskSubmit = (userInputObject) => {
    setTaskList((prevState) => {
      console.log(prevState + " PREV STATE");
      return prevState.push({
        ...userInputObject,
        taskID: Math.floor(Math.random() * 1000),
      });
    });
  };

  console.log(taskList + "  TASK LIST");

  useEffect(() => console.log(taskList), [taskList]);

  const subTaskList = [
    {
      taskID: "t3",
      subTasks: [
        "Pick up plastics waste",
        "Plant new tress",
        "Dump the wastes in dustbin",
        "Maintain cleanliness on the beach",
      ],
    },
  ];

  const [currentSelectedTask, setCurrentSelectedTask] = useState("0");

  const onTaskClick = (taskID) => {
    console.log(taskID);
    if (taskID === currentSelectedTask) {
      setCurrentSelectedTask("0");
    } else {
      setCurrentSelectedTask(taskID);
    }
  };

  return (
    <div className="main-section">
      <div className="task-section">
        <TaskList
          onTaskClick={onTaskClick}
          taskList={taskList}
          onTaskSubmit={onTaskSubmit}
        />
        <div className="task-description">
          <TaskDetails taskID={currentSelectedTask} taskList={taskList} />
          <SubTasks taskID={currentSelectedTask} subTaskList={subTaskList} />
        </div>
      </div>
    </div>
  );
}
