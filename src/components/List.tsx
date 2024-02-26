import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { RootState } from "@/redux/store";

const List: React.FC = () => {
  const list = useSelector((state: RootState) => state.list);

  return (
    <div>
      {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
