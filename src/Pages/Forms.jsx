import React, { useState } from "react";

function Forms() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  const clickHandler = () => {
    setTodos([input, ...todos]);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((_, i) => id !== i);
    setTodos(updatedTodos);
  };

  const editHandler = (id) => {
    setEditTask(id);
    setEditTodo(todos[id]);
  };

  const updateHandler = () => {
    const updatedTodos = todos.map((value, index) =>
      index === editTask ? editTodo : value
    );
    setTodos(updatedTodos);
    setEditTask(null);
  };

  return (
    <>
      <div>
        <h1 className="text-center">Todo App</h1>
      </div>
      <div className="flex justify-center">
        <input
          onChange={changeHandler}
          className="border border-gray-600"
          type="text"
          placeholder="Add Todo..."
        />
        <button
          onClick={clickHandler}
          className="bg-blue-800 text-white px-2 ml-2"
        >
          Add Todo!
        </button>
      </div>

      <div className="flex justify-center">
        <ul>
          {todos.map((value, index, array) => {
            return (
              <>
                <li key={index}>
                  {editTask === index ? (
                    <div>
                      <input
                        className="border border-gray-600"
                        type="text"
                        placeholder="Update todo.."
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                      />
                      <button
                        onClick={updateHandler}
                        className="bg-green-600 px-2 ml-3 mb-1"
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div>
                      {index}. {value}
                      <button
                        onClick={() => deleteHandler(index)}
                        className="bg-red-600 px-2 ml-3 mb-1"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => editHandler(index)}
                        className="bg-green-600 px-2 ml-3 mb-1"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Forms;

// input filed
// store into an array
// using id delete and edit operations
// arrays and objects
//person =  {name: "", add:""}  //person.name
// for in/ for of
// arrays [1,2,5]  -> for loop, for each, map

// [1,3,]
// []
// user123
// pass@123
// example@gmail.com



// todos = [1,2,3]
// map, filter
// events
// conditional rendering
// lists in react