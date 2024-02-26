import { useDispatch } from "react-redux";
import { deleteItem } from "@/redux/slice/listSlice";
import { ListItem as ListItemType } from "@/types";

interface ListItemProps {
  item: ListItemType;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item));
  };

  return (
    <div>
      {item}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListItem;
