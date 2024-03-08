import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import toast, { Toaster } from "react-hot-toast";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// App component is the root component of the application
function App() {
  // tasks state is used to store all the tasks
  const [tasks, setTasks] = useState([]);

  // useEffect hook is used to get tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    // DndProvider is a context provider for react-dnd (Drag and Drop)
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
        {/* CreateTask component is used to create new tasks */}
        <CreateTask tasks={tasks} setTasks={setTasks} />
        {/* ListTasks component is used to list all the tasks */}
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;