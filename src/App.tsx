import AddItem from "@/components/List/AddItem";
import List from "@/components/List/List";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AddItem />
      <List />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
