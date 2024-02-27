import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/listSlice";

const AddItem = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(input));
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
