import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Footer from './components/Footer.jsx'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";

import { FaEdit } from "react-icons/fa";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const savetols = () => { localStorage.setItem("todos", JSON.stringify(todos)) };

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      settodos(todos);
    }
  }, []);

  const Adding = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    savetols();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    settodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);
    savetols();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);
    savetols();
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    savetols();
  };

  const handleChange = (e) => {
    settodo(e.target.value);
    savetols();
  };

  return (
    <>
      <Navbar />
     
      <div className="flex flex-col container mx-auto min-h-[70vh] text-white my-10 p-4 rounded-lg items-center justify-center shadow-2xl bg-purple-500 font-sans
        sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
        sm:p-6 md:p-8 lg:p-10">
        <div className="addtodo w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <h2 className="text-white font-bold text-2xl my-4 sm:my-0">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="bg-white h-12 text-black w-full sm:w-64 rounded-lg shadow-lg px-4"
            placeholder="Enter your task"
            type="text"
          />
          <button
            id="add"
            disabled={todo.length < 2}
            className="bg-gray-500 py-1 rounded-md px-4 disabled:bg-violet-200 hover:bg-gray-800 shadow-lg"
            onClick={Adding}
          >
            Add
          </button>
        </div>

        <div className="w-full h-[2px] mt-7 opacity-20 bg-black mx-auto"></div>

        <h2 className="text-xl font-bold mt-10 text-center">Your Tasks</h2>
        <div className="todos w-full">
          {todos.length === 0 && (
            <div className="text-center mt-4">No Tasks to display</div>
          )}
          {todos.map(items => (
            <div key={items.id} className="todo flex flex-col sm:flex-row justify-between items-center gap-2 mt-5 bg-purple-600 rounded-lg p-2">
              <input
                name={items.id}
                onChange={handleCheckBox}
                type="checkbox"
                checked={items.isCompleted}
                className="mr-2"
              />
              <div className={items.isCompleted ? "line-through flex-1 text-center sm:text-left" : "flex-1 text-center sm:text-left"}>
                {items.todo}
              </div>
              <div className="buttons flex gap-2 mt-2 sm:mt-0">
                <button
                  onClick={(e) => { handleEdit(e, items.id) }}
                  className="bg-gray-500 py-1 rounded-md px-3 hover:bg-gray-800"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={(e) => { handleDelete(e, items.id) }}
                  className="bg-gray-500 py-1 rounded-md px-3 hover:bg-gray-800"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
