import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { RootState } from "@/store/store";
import logo from "@/assets/logo.png";
import { useState } from "react";

const List: React.FC = () => {
  const list = useSelector((state: RootState) => state.list);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <section className="w-full">
      {/* 리스트 카운트 */}
      <figure className="flex justify-between items-center mb-6">
        <div className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full">
          {list.length}
        </div>
        <span className="h-0 w-[245px] border-b border-black " />
        <img src={logo} alt="logo" className="w-11 h-5 ml-2" />
      </figure>
      {/* 리스트들 */}
      <article
        className={`flex flex-col gap-2 h-[75vh] overflow-y-scroll scrollbar-hide transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-inner" : "shadow-none"
        }`}
        onScroll={handleScroll}
      >
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </article>
    </section>
  );
};

export default List;
