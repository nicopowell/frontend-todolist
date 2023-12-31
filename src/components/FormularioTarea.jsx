import { Button, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import { consultaAgregarTarea, consultaListaTareas } from "./helpers/queris";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioTarea = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [tareaNueva, setTareaNueva] = useState("");
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        consultaListaTareas().then((respuesta) => {
            setTareas(respuesta);
        });
    }, []);
    const onSubmit = (tareaNueva) => {
        consultaAgregarTarea(tareaNueva).then((respuestaCreated) => {
            if (respuestaCreated && respuestaCreated.status === 201) {
                Swal.fire(
                    "Tarea creada",
                    `La tarea ${tareaNueva.nombreTarea} fue creada correctamente`,
                    "success"
                );
                reset();
                consultaListaTareas().then((respuesta) => {
                    setTareas(respuesta);
                });
            } else {
                Swal.fire(
                    "Ocurrio un error",
                    `La tarea ${tareaNueva.nombreProducto} no fue creada, intentelo mas tarde`,
                    "error"
                );
            }
        });
    };

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="tarea">
                    <div className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese una tarea"
                            maxLength={100}
                            {...register("nombreTarea", {
                                required: "Debe ingresar una tarea",
                                maxLength: {
                                    value: 100,
                                    message: "La cantidad máxima de caracteres es de 100 digitos",
                                },
                            })}
                        />
                        <Button variant="primary" type="submit">
                            <i className="bi bi-plus-circle fs-5"></i>
                        </Button>
                    </div>

                    <Form.Text className="text-danger">{errors.nombreTarea?.message}</Form.Text>
                </Form.Group>
            </Form>
            <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
        </section>
    );
};

export default FormularioTarea;
