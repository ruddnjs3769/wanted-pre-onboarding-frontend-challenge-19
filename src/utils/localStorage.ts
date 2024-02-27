import { toast } from "react-hot-toast";

export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      toast.error("🗑️ 데이터가 없습니다.");
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    toast.error("❌ 데이터를 불러오는데 실패했습니다.");
    return null;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveState = (key: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch {
    toast.error("❌ 데이터를 저장하는데 실패했습니다.");
    return null;
  }
};
