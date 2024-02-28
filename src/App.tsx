import AddItem from "@/components/List/AddItem";
import List from "@/components/List/List";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <main className="w-screen h-screen lg:w-[393px] lg:h-[852px] bg-white py-10 px-6">
        <Header />
        <section className="pb-3">
          <AddItem />
          <List />
        </section>
        <Toaster position="bottom-center" />
      </main>
    </div>
  );
}

export default App;
