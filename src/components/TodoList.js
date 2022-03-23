import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList(props) {
  const [todos, setTodos] = useState([]);
  // const [{edit}, {setEdit}] = useState({
  //   id: null,
  //   value: "",
  // });

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  // const completeTodo = (id) => {
  //   let updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

console.log("todos",todos);
  return (
    <> {todos!=0 ? <div id="column" >
    <div className="priority"> Priority </div>
    <div className="task"> Task </div>
    <div className="date"> Date </div>
    <div className="done"> Done </div>
  </div>: <div></div>}
     
     <Todo 
        todos={todos}
        // completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
     
      />
        <TodoForm onSubmit={addTodo}  />
    </>
  );
}

export default TodoList;
