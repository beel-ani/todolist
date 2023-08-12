/* eslint-disable no-unused-vars */
import "./index.css";
import "./App.css";
import Form from "./componentes/Form";
import Tarea from "./componentes/Tarea";
import Formulario from "./componentes/Formulario";
import { useEffect, useState } from "react";
import TodoFilter from "./componentes/TodoFilter";
function App() {
  const [tareas, setTareas] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  /////stados para all completed e  incompleto ////
  /* const [status, setStatus] = useState("all");
  
  const [todos, setTodos] = useState([]); */
  const [activeFilter, setActiveFilter] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  /* const statusHandler = (e) => {
    setStatus(e.target.value);
  };
 */
  /* const filterHandler = () => {
    switch (status) {
      case "completed":
        setListadoTareas(
          listadoTareas.filter((todo) => todo.completed === true)
        );
        break;
      case "incompleto":
        setListadoTareas(
          listadoTareas.filter((todo) => todo.completed === false)
        );
        break;
      default:
        setListadoTareas(listadoTareas);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [status]); */

  const handleClearCompleted = () => {
    const updateList = todos.filter((todo) => !todo.tareas !== tareas);
    setTodos(updateList);
  };
  const showAllTodos = () => {
    setActiveFilter("all");
  };
  const showActiveTodos = () => {
    setActiveFilter("active");
  };
  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);
  /* const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
      }
      return getLocalTodos;
    };
  }; */
  /////////////7/////////////////////////
  function handleSubmit(e) {
    e.preventDefault();

    if (tareas === "") {
      alert("debes poner una tarea");
      return;
    }
    const newtarea = {
      id: Date.now(),
      tareas: tareas,
      completado: false,
    };
    const temp = [newtarea, ...listadoTareas];
    setListadoTareas(temp);
    setTareas("");
  }

  function handleChange(e) {
    setTareas(e.target.value);
  }

  function onActualizarTarea(objEditarTarea) {
    const { id, tareas } = objEditarTarea;

    const temp = [...listadoTareas];
    const elemento = temp.find((item) => item.id === id);
    elemento.tareas = tareas;
    setListadoTareas(temp);
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter((item) => item.id !== id);
    setListadoTareas(temp);
  }

  return (
    <>
      <div className="contenedorPrincipal flex flex-col max-w-xl bg-['./img/cerezos.jpg']">
        <div className="tareas-lista-principal ">
          <div className="contenedorFormulario">
            <h1>
              {" "}
              <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
                MisTareas
              </span>
            </h1>{" "}
            <Form />
            {/* filterHandler={filterHandler} statusHandler={statusHandler} />{" "} */}
            <Formulario
              handleClearCompleted={handleClearCompleted}
              showAllTodos={showAllTodos}
              showActiveTodos={showActiveTodos}
              showCompletedTodos={showCompletedTodos}
              setTareas={setTareas}
              tareas={tareas}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
            <div className="contenedorTareas">
              <div className="contenedorInfoTareas">
                <TodoFilter />
                {/* {todos.map((todos) => {
                  return  */}
                {listadoTareas.map((tarea) => (
                  <Tarea
                    handleClearCompleted={handleClearCompleted}
                    setTareas={setTareas}
                    tareas={tareas}
                    key={tareas.id}
                    id={tareas.id}
                    text={tareas.text}
                    onActualizarTarea={onActualizarTarea}
                    onBorrarTarea={onBorrarTarea}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
