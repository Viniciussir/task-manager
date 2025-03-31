import {
  TaskState,
  TaskActionTypes,
  ADD_TASK,
  REMOVE_TASK,
} from "../types/taskTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (
  state = initialState,
  action: TaskActionTypes
): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
