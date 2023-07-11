import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea tarea={tarea} key={tarea.id}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;