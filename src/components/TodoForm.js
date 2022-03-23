import React, { useState, useEffect, useRef } from "react";
import { DatePicker, InputNumber } from "antd";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [priority, setPriority] = useState(props.edit ? props.edit.priority : "");
  const [date, setDate] = useState(props.edit ? props.edit.date : "");
  const inputRef = useRef(null);
console.log('input',inputRef)
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handle = (e) => {
    setPriority(e)
  };
  const handleDate = (date, dateString) => {
    setDate(dateString);
    console.log(date, dateString);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      priority: priority,
      date: date,
    });
    setInput("");
  };
console.log("propEdit",props.edit);
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit!==undefined ? (
        <>
        
          <InputNumber
            placeholder={priority}
            onChange={handle}
            name="priority"
          />

          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
            
          />

          <DatePicker  placeholder={date} onChange={handleDate}  name="date" />

          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <InputNumber 
            placeholder="priority"
            onChange={handle}
            name="priority"
          />
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <DatePicker onChange={handleDate} name="date" />

          <button onClick={handleSubmit} className="todo-button">
            Create
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm; 