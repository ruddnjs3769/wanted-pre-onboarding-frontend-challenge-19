import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListItem } from "@/types";

const listSlice = createSlice({
  name: "list",
  initialState: [] as ListItem[],
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<ListItem>) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = listSlice.actions;

export default listSlice.reducer;
