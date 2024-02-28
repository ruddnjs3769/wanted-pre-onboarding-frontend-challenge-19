import { useDispatch } from "react-redux";
import { deleteItem } from "@/store/slice/listSlice";
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
    <div className="w-full h-7 border border-[#c9c9c9] p-2 flex justify-between items-center">
      {item.content}
      <button
        className="w-[60px] h-5 bg-[#2B9F45] rounded-full text-white text-xs font-bold hover:bg-white hover:text-[#2B9F45] hover:border hover:border-[#2b9f45] transition-all duration-300 ease-in-out"
        onClick={handleDelete}
      >
        Done!
      </button>
    </div>
  );
};

export default ListItem;
