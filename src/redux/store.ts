import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./slice/listSlice";

const rootReducer = combineReducers({
  // 리듀서 추가
  list: listReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
