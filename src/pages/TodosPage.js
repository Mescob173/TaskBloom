import { useEffect, useState } from "react";

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
useEffect(() => {
  document.title = "TaskBloom | Todos";
}, []);

function addTodo() {
  if (newTodo.trim() === "") return;

  setTodos([
    ...todos,
    {
      text: newTodo,
      completed: false,
    },
  ]);

  setNewTodo("");
}
function toggleTodo(index) {
  const updatedTodos = [...todos];

  updatedTodos[index].completed = !updatedTodos[index].completed;

  setTodos(updatedTodos);
}
function deleteTodo(index) {
  const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
  setTodos(updatedTodos);
}
const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.completed;
  if (filter === "incomplete") return !todo.completed;
  return true;
});

const completedTasks = todos.filter((todo) => todo.completed).length;
const remainingTasks = todos.length - completedTasks;
const totalTasks = todos.length;
  return (
    
<div>
  <div className="hero">
  <h2>📝 My Tasks</h2>
  <p>Bloom one task at a time. Stay organized and productive.</p>
</div>

  <div className="input-group">
  <input
    type="text"
    placeholder="Enter a new task..."
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />

  <button onClick={addTodo}>➕ Add Task</button>
</div>

  <div className="filter-buttons">
  <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
  >
    📋 All
  </button>

  <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
  >
    ✅ Completed
  </button>

  <button
    className={filter === "incomplete" ? "active-filter" : ""}
    onClick={() => setFilter("incomplete")}
  >
    ⏳ Incomplete
  </button>
</div>

  <ul>
  {filteredTodos.map((todo, index) => (
   <li key={index}>
  <div className="todo-left">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(index)}
    />

    <span
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.text}
    </span>
  </div>

  <button
    className="delete-btn"
    onClick={() => deleteTodo(index)}
  >
    🗑 Delete
  </button>
</li>
  ))}
</ul>

<div className="summary-bar">
  <span>📋 {totalTasks} Tasks</span>
  <span>✅ {completedTasks} Completed</span>
  <span>⏳ {remainingTasks} Remaining</span>
</div>
</div>
  );
}

export default TodosPage;
