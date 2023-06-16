import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./userSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: <_>() => AppDispatch = useDispatch;

export default store;
