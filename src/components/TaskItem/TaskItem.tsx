import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../features/task/actions/taskActions";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  id: number;
  title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.taskItem}>
      {title}
      <button
        className={styles.taskItem__removeButton}
        onClick={() => dispatch(removeTask(id))}
      >
        Remover
      </button>
    </li>
  );
};

export default TaskItem;
