import { combineReducers } from "redux";
import taskReducer from "../features/task/reducers/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
