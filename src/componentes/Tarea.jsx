/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState } from "react";
import "../hojas-de-estilo/Tarea.css";

function Tarea(props) {
  const { onActualizarTarea, onBorrarTarea, tareas, completed } = props;
  console.log(props);
  const [editando, setEditando] = useState(false);
  console.log(tareas);

  const [estaCompletada, setEstaCompletada] = useState(false);
  function ModoEdicionActivado() {
    const [valor, setValor] = useState(tareas.tareas);
    function handleChange(e) {
      const text = e.target.value;
      setValor(text);
    }
    function handleClick(e) {
      e.preventDefault();

      onActualizarTarea({
        id: tareas.id,
        tareas: valor,
        completado: false,
      });
      setEditando(false);
    }

    return (
      <>
        <input type="text" value={valor} onChange={handleChange} />

        <button className="btn" onClick={handleClick}>
          guardar
        </button>
        <button
          className="btn btnBorrar"
          onClick={() => onBorrarTarea(tareas.id)}
        >
          borrar
        </button>
        <button className="completed">
          <i className="fasfa-check"></i>
        </button>
      </>
    );
  }
  function ModoEdiciondesactivado() {
    return (
      <>
        <span
          className={estaCompletada ? "todoTarea spanSubrayada" : "todoTarea"}
          onClick={() => setEstaCompletada(!estaCompletada)}
        >
          {tareas.tareas}
        </span>
        {/* <button onClick={() => setEditando(true)} className="btn btnEditar">
          actualizar
        </button>
        <button
          className="btn btnBorrar"
          onClick={() => onBorrarTarea(tarea.id)}
        >
          borrar
        </button> */}
        <button className="completed"></button>
      </>
    );
  }

  return (
    <>
      <div
        className="contenedorTarea mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
        id={tareas.id}
      >
        {completed ? (
          <input
            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
          />
        ) : (
          <span className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
        )}
        <input type="onSubmit" value={valor} />

        {editando ? <ModoEdicionActivado /> : <ModoEdiciondesactivado />}
        <button className="btn btnEditar" onClick={() => setEditando(true)}>
          Actualizar
        </button>
        <button className="btnBorrar" onClick={() => onBorrarTarea(tareas.id)}>
          BORRAR
        </button>
        <button className="completed"></button>
      </div>
    </>
  );
}

export default Tarea;
