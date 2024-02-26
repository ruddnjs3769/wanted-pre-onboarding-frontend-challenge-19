import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "@/utils/localStorage";
import listReducer from "./slice/listSlice";

const rootReducer = combineReducers({
  // 리듀서 추가
  list: listReducer,
});

// localStorage에서 list 데이터를 불러옵니다.
// initialState의 list에 불러온 데이터를 저장합니다.
const initialState = {
  list: loadState("list") || [],
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

// store listSlice의 상태가 변경될 때마다 localStorage에 데이터를 저장합니다.
store.subscribe(() => {
  saveState("list", store.getState().list);
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
