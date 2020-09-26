import { combineReducers } from "redux";
import todoReducer from "./todo";
import visibilityReducer from "./visibility";

export const rootReducer = combineReducers({
  todoReducer,
  visibilityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
