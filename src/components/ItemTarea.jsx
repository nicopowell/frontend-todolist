import { Button, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./tareas.css"

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span className="ajustarTexto me-2">{tarea}</span>
        <Button variant="outline-danger" onClick={()=> borrarTarea(tarea) }><i className="bi bi-x-circle fs-5"></i></Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
