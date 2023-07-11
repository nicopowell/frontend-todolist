import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, setTareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <ItemTarea tarea={tarea} key={tarea._id} setTareas={setTareas}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;