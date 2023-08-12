import React from "react";

export default function Formulario(props) {
  const { handleSubmit, handleChange, tareas } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="exampleFormControlInput1"
          placeholder="Example task"
          onChange={handleChange}
          value={tareas}
        />
        <input
          type="submit"
          className="btn"
          value="agregar"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
