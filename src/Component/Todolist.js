import React from "react";
import Todo from "./Todo";

function Todolist({ todolist, checkBtnInput }) {
  return (
    <>
      {todolist.map((todo) => (
        <Todo key={todo.id} todo={todo} checkBtnInput={checkBtnInput}></Todo>
      ))}
    </>
  );
}

export default Todolist;
