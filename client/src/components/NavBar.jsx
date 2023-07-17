import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-900 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1 className="text-xl">G_R</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-emerald-400 px-2 py-1, text-white px-2 py-1 rounded-sm">Home</Link>
        </li>
        <li>
          <Link to="/tareas" className="bg-pink-500 px-2 py-1, text-white px-2 py-1 rounded-sm" >Create task</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Navbar;