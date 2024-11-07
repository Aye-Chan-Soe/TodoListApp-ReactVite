import { Header } from "./Componenets/Header.jsx";
import { Tabs } from "./Componenets/Tabs.jsx";
import { TodoInput } from "./Componenets/TodoInput.jsx";
import { TodoList } from "./Componenets/TodoList.jsx";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  //Tab
  const [selectedTab, setSelectedTab] = useState("All");

  //Btn Func:
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  //LocalStorage
  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    //Check DB
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
