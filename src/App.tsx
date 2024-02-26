import AddItem from "@/components/AddItem";
import List from "@/components/List";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AddItem />
      <List />
      <Toaster />
    </>
  );
}

export default App;
