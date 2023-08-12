import React from "react";

export default function Form({ filterHandler, statusHandler }) {
  return (
    <form className="flex-end">
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completado</option>
          <option value="incompleto">incompleto</option>
        </select>
      </div>
    </form>
  );
}
