export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number;
}

export interface TaskState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export type TaskActionTypes = AddTaskAction | RemoveTaskAction;
