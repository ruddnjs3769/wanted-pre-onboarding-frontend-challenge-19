import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/listSlice";
import plus from "@/assets/plus.png";
import { v4 } from "uuid";

const AddItem = () => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: v4(),
        content: input,
      };
      dispatch(addItem(newItem));
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="w-full mb-7">
      <div className="w-full relative h-7 flex justify-center items-end">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`text-base text-black w-full border border-black bg-transparent relative z-10 ${
            input || isFocused ? "text-gray-600 outline-none" : ""
          }`}
        />
        <label
          className={`absolute text-gray-400 text-sm left-2.5 transition-all duration-200 ${
            input || isFocused
              ? "text-base -bottom-6 text-gray-600 font-bold"
              : "bottom-1"
          }`}
        >
          {input || isFocused
            ? input
              ? "Press enter or click button"
              : "What are you going to do today?"
            : "Enter your List Here"}
        </label>
        <span
          className={`block absolute bottom-0 left-0 bg-gray-600 h-0.5 rounded-sm transition-all duration-500 ${
            input || isFocused ? "w-full" : "w-0"
          }`}
        ></span>
        <button
          onClick={handleAdd}
          className={`absolute top-[5px] right-3 w-[60px] flex justify-center items-center h-5 rounded-full text-xs font-bold transition-all duration-400 z-20 ${
            isHovered || isFocused
              ? "border border-black bg-white text-black"
              : "bg-black text-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Add{" "}
          <img
            src={plus}
            alt="plus"
            className={`w-[9.6px] h-[9.6px] ml-1 transition-all duration-600 ${
              isHovered || isFocused ? "invert rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
