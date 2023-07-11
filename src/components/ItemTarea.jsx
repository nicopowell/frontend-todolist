import { Button, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./tareas.css";
import Swal from "sweetalert2";
import { consultaBorrarTarea, consultaEditarTarea, consultaListaTareas } from "./helpers/queris";

const ItemTarea = ({ tarea, setTareas }) => {
    const borrarTarea = () => {
        Swal.fire({
            title: `¿Esta seguro de borrar la tarea ${tarea.nombreTarea}?`,
            text: "No se puede revertir este paso",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                consultaBorrarTarea(tarea._id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            "Tarea eliminada",
                            `La tarea ${tarea.nombreTarea} fue eliminada correctamente`,
                            "success"
                        );
                        //actualizar la tabla de productos
                        consultaListaTareas().then((respuesta) => setTareas(respuesta));
                    } else {
                        Swal.fire(
                            "Ocurrio un error",
                            `Intente realizar esta operación nuevamente mas tarde`,
                            "success"
                        );
                    }
                });
            }
        });
    };
    const editarTarea = (id) => {
      console.log(id)
        Swal.fire({
            title: "Editar tarea",
            input: "text",
            inputValue: tarea.nombreTarea,
            showCancelButton: true,
            confirmButtonText: "Editar",
            showLoaderOnConfirm: true,
            preConfirm: (nombreNuevaTarea) => {
                const nuevaTarea = {
                    nombreTarea: nombreNuevaTarea,
                };
                return consultaEditarTarea(nuevaTarea, id);
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Tarea editada", `La tarea fue editada correctamente`, "success");
                consultaListaTareas().then((respuesta) => setTareas(respuesta));
            }
        });
    };
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span className="ajustarTexto me-2">{tarea.nombreTarea}</span>
                <div>
                    <Button variant="outline-primary me-2" onClick={() => editarTarea(tarea._id)}>
                        <i className="bi bi-pencil-square fs-5"></i>
                    </Button>
                    <Button variant="outline-danger" onClick={borrarTarea}>
                        <i className="bi bi-x-circle fs-5"></i>
                    </Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;
