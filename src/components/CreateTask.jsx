import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", //can also be "done" or "in-progress"
  });

  console.log(task);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3)
      return toast.error("Task name must be at least 3 characters.");
    if(task.name.length > 100)
      return toast.error("Task name should not exceed 100 char.");

    setTasks((prev) => {
      const list = [...prev, task];

      localStorage.setItem("tasks", JSON.stringify(list));

      return list;
    });

    toast.success("Task created.");

    setTask({ id: "", name: "", status: "todo" });

  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1 "
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white ">
        Create
      </button>
    </form>
  );
};
export default CreateTask;
