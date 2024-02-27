import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListItem } from "@/types";
import { toast } from "react-hot-toast";

const listSlice = createSlice({
  name: "list",
  initialState: [] as ListItem[],
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.push(action.payload);
      toast.success("✅ 아이템이 추가되었습니다.");
    },
    deleteItem: (state, action: PayloadAction<ListItem>) => {
      const deletedState = state.filter((item) => item !== action.payload);
      if (deletedState) toast.error("🗑️ 아이템이 삭제되었습니다.");
      return deletedState;
    },
  },
});

export const { addItem, deleteItem } = listSlice.actions;

export default listSlice.reducer;
