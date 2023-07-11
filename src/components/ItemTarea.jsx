import { Button, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./tareas.css"

const ItemTarea = ({ tarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span className="ajustarTexto me-2">{tarea.nombreTarea}</span>
        <Button variant="outline-danger" onClick={()=> console.log("borrar") }><i className="bi bi-x-circle fs-5"></i></Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
