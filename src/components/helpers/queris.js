const URLTareas = import.meta.env.VITE_API_TAREAS;

export const consultaListaTareas = async () => {
    try {
        const respuesta = await fetch(URLTareas);
        const listaTareas = await respuesta.json();
        return listaTareas;
    } catch (error) {
        console.log(error);
    }
};

export const consultaAgregarTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URLTareas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
