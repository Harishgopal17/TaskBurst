import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import woodenBG from "./assets/wooden-background.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [length, setLength] = useState(140);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addNote() {
    if (tasks.length >= 5) {
      alert("You can only add up to five tasks.");
      setNewTask("");
      return;
    }

    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
      setLength(140);
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${woodenBG})` }}
        className="bg-cover opacity-95"
      >
        <div className="max-container">
          <div className="flex flex-col h-screen gap-12">
            <h3 className="text-4xl font-bold self-center pt-16">Task Burst</h3>
            <div className="w-full flex items-center justify-center gap-1">
              <input
                className=" w-[40%] p-2 border border-[#1f2129af] text-black outline-none text-2xl rounded-md"
                type="text"
                placeholder="Whatcha gotta Do?"
                value={newTask}
                maxLength={140}
                onChange={(e) => {
                  const t = e.target.value;
                  setNewTask(t);
                  setLength(140 - t.length);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addNote();
                }}
              />
              <p>({length}/140)</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {tasks.map((task, index) => (
                <TodoCard
                  key={index}
                  task={task}
                  onDelete={() => deleteTask(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
