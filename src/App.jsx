import AddTodo from "./components/AddTodo";
import GreetingMessage from "./components/GreetingMessage";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todoContext";
function App() {
  
  return (
    <section className="w-full min-h-screen bg-gray-950 flex flex-col items-center justify-start gap-4 py-20">
      <main className="w-[500px] flex flex-col gap-8">
        <h1 className="text-gray-300 text-4xl font-semibold">
          Rajat's To-Do Board ✏️
        </h1>
        <TodoItemsContextProvider>
          <AddTodo />
          <GreetingMessage />
          <TodoItems />
        </TodoItemsContextProvider>
      </main>
    </section>
  );
}

export default App;
