import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/listSlice";

const AddItem = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addItem(input));
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
