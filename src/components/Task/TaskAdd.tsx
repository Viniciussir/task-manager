import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/actions/taskActions";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./TaskAdd.module.scss";

const AddTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ id: Date.now(), title: taskTitle, completed: false }));
      setTaskTitle("");
    }
  };

  return (
    <div className={styles.taskAdd}>
      <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <Button onClick={handleAddTask} />
    </div>
  );
};

export default AddTask;
