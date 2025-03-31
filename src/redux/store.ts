import { createStore } from "redux";
import { taskReducer } from "../features/task";

const store = createStore(taskReducer);

export default store;
