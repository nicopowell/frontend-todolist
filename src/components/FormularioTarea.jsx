import { Button, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
   setTareas([...tareas,tarea]);
   setTarea('');
  }

  const borrarTarea = (nombreTarea)=>{
    let copiaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea );
    setTareas(copiaTareas);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            required
            maxLength={75}
          />
          <Button variant="primary" type="submit">
          <i className="bi bi-plus-circle fs-5"></i>
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;