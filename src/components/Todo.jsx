import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const clickHandler = () => {
    setTodos([input, ...todos]);
  };

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((_, i) => i !== id);
    setTodos(updatedTodos);
  };

  const editHandler = (id) => {
    setEditTask(id);
  };

  //   condtion ? state1 : state2
  return (
    <>
      <div>
        <input
          type="text"
          className="border border-gray-700"
          placeholder="Enter a todo!"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={clickHandler}
          className="bg-blue-700 text-white px-2 py-1 rounded ml-2"
        >
          Add Todo
        </button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <>
                {editTask === index ? (
                  <div>
                    <input type="text" placeholder="Edit task.." />
                    <button>Update todo</button>
                  </div>
                ) : (
                  <div className="flex">
                    <li>{todo}</li>{" "}
                    <button
                      onClick={() => deleteHandler(index)}
                      className="bg-blue-700 text-white px-2 py-1 rounded ml-2"
                    >
                      Delete
                    </button>{" "}
                    <button
                      onClick={() => editHandler(index)}
                      className="bg-blue-700 text-white px-2 py-1 rounded ml-2"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
