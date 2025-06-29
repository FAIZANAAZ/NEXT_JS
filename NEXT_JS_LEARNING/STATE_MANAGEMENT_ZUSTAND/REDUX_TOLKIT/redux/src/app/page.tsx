import AddTodo from "@/components/addtodo";
import Todo from "@/components/todo";
import StoreProvider from "./StoreProvider";
export default function Home() {
  return (
    <>
    <StoreProvider >
    <div className="flex flex-col  items-center justify-center min-h-screen gap-4 bg-gray-100">
      <AddTodo/>
    <Todo/>
    </div>
    </StoreProvider>
    </>
  );
}
