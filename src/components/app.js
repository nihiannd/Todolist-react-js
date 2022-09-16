import React, { useState } from "react";
// import Todo from "./todo";
import TodoItem from "./TodoItem";

// const data = [
//   {
//     id: 1,
//     task: "Bath",
//     isDone: false,
//   },
//   {
//     id: 2,
//     task: "Brush",
//     isDone: false,
//   },
//   {
//     id: 3,
//     task: "Clean Clothes",
//     isDone: true,
//   },
//   {
//     id: 4,
//     task: "Eat",
//     isDone: true,
//   },
//   {
//     id: 5,
//     task: "Sleep",
//     isDone: true,
//   },
// ];
function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  function handleChanger(event) {
    // console.log("🚀 ~ file: app.js ~ line 3 6 ~ App ~ input", input);
    event.preventDefault();
    if (!!input) {
      // const Data = document.getElementById("#myInput");
      const NewData = {
        id: new Date(),
        task: input,
        isDone: false,
      };
      const NewDatas = [NewData, ...todos];
      setTodos(NewDatas);
      setInput("");
      console.log(NewDatas);
    } else {
      alert("write down something");
    }
  }
  function handleDelete(item) {
    // console.log("delete", item);
    const newTodos = todos.filter((_todo) => {
      return _todo.id !== item.id;
    });
    // console.log("🚀 ~ file: app.js ~ line 36 ~ newTodos ~ newTodos", newTodos);

    setTodos(newTodos);
  }
  function handleComplete(done) {
    // console.log("Completed", done);
    const newTodos = todos.map((todo) => {
      if (todo.id === done.id) {
        return { id: todo.id, task: todo.task, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }
  return (
    <div className="app">
      {/* <Todo /> */}
      <form>
        <div className="input-group mb-3 " style={{ height: 50 }}>
          <input
            className="form-control h-100 "
            id="myInput"
            type="text"
            placeholder="Task to be done"
            autoComplete="off"
            value={input}
            onInput={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="btn btn-outline-secondary" onClick={handleChanger}>
            Add Task
          </button>
        </div>
      </form>
      {todos.map((user) => {
        return (
          <TodoItem
            key={user.id}
            id={user.id}
            task={user.task}
            isDone={user.isDone}
            removeTask={() => {
              handleDelete(user);
            }}
            finishTask={() => {
              handleComplete(user);
            }}
          />
        );
      })}
    </div>
  );
}
export default App;
