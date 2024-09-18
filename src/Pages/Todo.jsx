import React, { useState } from 'react';


function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTodo, setEditTodo] = useState('');
  
    const addTodo = () => {
      if (newTodo.trim() === '') return;
      setTodos([...todos, newTodo]);
      setNewTodo('');
    };
  
    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  
    const editTask = (index) => {
      setEditIndex(index);
      setEditTodo(todos[index]);
    };
  
    const saveEdit = () => {
      const updatedTodos = todos.map((todo, i) =>
        i === editIndex ? editTodo : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditTodo('');
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
  
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={addTodo}
              className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
  
          <div>
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4 p-2 bg-gray-50 rounded-lg shadow-sm"
              >
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                    />
                    <button
                      onClick={saveEdit}
                      className="p-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1">{todo}</span>
                    <button
                      onClick={() => editTask(index)}
                      className="p-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Todo;
