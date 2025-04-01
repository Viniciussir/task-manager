import React from "react";
import { useSelector } from "react-redux";
import { TaskState } from "../../features/task/types/taskTypes";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.scss";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: TaskState) => state.tasks);

  return (
    <div className={styles.taskList}>
      <h2 className={styles.taskList__title}>Lista de Tarefas</h2>
      <ul className={styles.taskList__items}>
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
