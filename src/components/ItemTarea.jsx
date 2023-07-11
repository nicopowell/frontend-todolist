import { Button, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./tareas.css"
import Swal from "sweetalert2";
import { consultaBorrarTarea, consultaListaTareas } from "./helpers/queris";

const ItemTarea = ({ tarea, setTareas }) => {
  const borrarTarea = ()=>{
    Swal.fire({
      title: `¿Esta seguro de borrar la tarea ${tarea.nombreTarea}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarTarea(tarea.id).then((respuesta)=>{
          if(respuesta.status === 200){
            Swal.fire(
              'Tarea eliminada',
              `El ${tarea.nombreTarea} fue eliminada correctamente`,
              'success'
            );
            //actualizar la tabla de productos
            consultaListaTareas().then((respuesta)=> setTareas(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'success'
            )
          }
        })
        
      }
    })
  }
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span className="ajustarTexto me-2">{tarea.nombreTarea}</span>
        <Button variant="outline-danger" onClick={borrarTarea}><i className="bi bi-x-circle fs-5"></i></Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
