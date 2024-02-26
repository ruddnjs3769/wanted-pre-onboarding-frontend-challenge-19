import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // 리듀서 추가
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
