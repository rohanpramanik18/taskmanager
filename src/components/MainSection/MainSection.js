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

  const deleteTask = (taskId) => {
    let newTaskList = [];
    taskList.map((task) => {
      if (task.taskID !== taskId) {
        newTaskList.push(task);
      }
    });
    setTaskList(newTaskList);
  };

  const onTaskSubmit = (userInputObject) => {
    setTaskList([
      ...taskList,
      {
        ...userInputObject,
        taskID: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  const [subTaskList, setSubtaskList] = useState([
    {
      taskID: "t3",
      subTasks: [
        "Pick up plastics waste",
        "Plant new tress",
        "Dump the wastes in dustbin",
        "Maintain cleanliness on the beach",
        "abc",
        "xyz",
        "hello",
        "iphone",
        "android",
        "mac",
        "windows",
      ],
    },
  ]);

  useEffect(() => console.log(subTaskList), [subTaskList]);

  const onSubtaskAdd = (taskID, subtaskInput) => {
    console.log(taskID + "  :  " + subtaskInput);
    let newSubtask = {
      taskID: taskID,
    };
    let isSubtaskPresent = false;
    let newSubtaskList = [];
    subTaskList.map((subTasks) => {
      if (subTasks.taskID === taskID) {
        isSubtaskPresent = true;
        newSubtaskList.push({
          taskID: taskID,
          subTasks: [...subTasks.subTasks, subtaskInput],
        });
      } else {
        newSubtaskList.push(subTasks);
      }
    });
    if (!isSubtaskPresent) {
      newSubtaskList.push({
        taskID: taskID,
        subTasks: [subtaskInput],
      });
    }
    setSubtaskList(newSubtaskList);
  };

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
          currentSelectedTask={currentSelectedTask}
          deleteTask={deleteTask}
        />
        <div className="task-description">
          <TaskDetails taskID={currentSelectedTask} taskList={taskList} />
          <SubTasks
            taskID={currentSelectedTask}
            subTaskList={subTaskList}
            onSubtaskAdd={onSubtaskAdd}
          />
        </div>
      </div>
    </div>
  );
}
