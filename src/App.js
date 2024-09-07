import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const handleAdd = () => {
    if (!todoValue) {
      console.error("Write anything for todo");
    } else {
      const newTodo = { id: Date.now(), value: todoValue };
      setTodo([...todo, newTodo]);
      setTodoValue("");
    }
  };
  const handleDelete = (id) => {
    const dt = todo.filter((item) => item.id !== id);
    setTodo(dt);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <p>
        This is the brief introduction of my Todo App in which we can create
        Todo, delete Todo by clicking on the delete button and update the Todo
        by clicking on the udate button
      </p>
      <input
        type="text"
        name="todoValue"
        value={todoValue}
        placeholder={"Add Todo"}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todo.map((item) => {
          return (
            <>
              <li key={item.id}>{item.value}</li>
              <button onClick={() => handleDelete(item.id)}>Delete Todo</button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
