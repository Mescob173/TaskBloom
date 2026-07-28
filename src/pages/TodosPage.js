import { useEffect, useState } from "react";

function TodosPage() {
 
 // Loads saved tasks from localStorage when the app starts
    const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
});
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
useEffect(() => {
  document.title = "TaskBloom | Todos";
}, []);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

// Adds a new task to the list.
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

// Marks a task as completed or incomplete
function toggleTodo(index) {
  const updatedTodos = [...todos];

  updatedTodos[index].completed = !updatedTodos[index].completed;

  setTodos(updatedTodos);
}

// Deletes a task from the list
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
  placeholder="What would you like to accomplish today?"
  value={newTodo}
  onChange={(e) => setNewTodo(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }}
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
  {filteredTodos.length === 0 ? (
    <div className="empty-state">
      <h2>🌸</h2>
      <h3>You're all caught up! 🎉</h3>
      <p>Add your first task to get started.</p>
    </div>
  ) : (
    filteredTodos.map((todo, index) => (
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
    ))
  )}
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
