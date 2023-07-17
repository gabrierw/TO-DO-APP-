import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-red-700 px-2 py-1 text-white rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-rose-400	 px-2 py-1 text-white rounded"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit  
        </button>
        <button
          className="bg-cyan-400 px-2 py-1 text-white rounded"    bg-cyan-400
          onClick={() => handleDone(task.done)}
        >
          Checked
        </button>
      </div>
    </div>
  );
}

export default TaskCard;