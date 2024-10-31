import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import TodosReducer from "./TodosReducer";
export default function TodoList() {
  const todos  = useSelector((state: any) => state.Todos?.todos||[]);
  console.log(todos);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group" style={{maxWidth:500}}>
      <TodoForm/>
      {todos.map((todo:any) => (
        <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
  );
}
