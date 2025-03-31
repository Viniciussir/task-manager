import { Task } from "../types/taskTypes";
import { ADD_TASK, REMOVE_TASK } from "../types/taskTypes";

export const addTask = (task: Task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const removeTask = (taskId: number) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};
