let tareas
// Array de objetos
if({{params.type == "localizar_incidencia"}}){
	//tareas = [{{params.datos.data}}]
  tareas = [{{state.linea_seleccionada}}]
}else{
	tareas = await {{actions.query_vista_interfaz.data.datos}}

}
  
// Transformación del array a un formato plano
let resultado = tareas.map(tarea => {
    let latitud = tarea.latitud;
    let longitud = tarea.longitud;

    if (latitud !== null && longitud !== null) {
        return {
            latitude: latitud,
            longitude: longitud,
            name: `${tarea.task_id}`,
            //icon: tarea.status === 'Asignado' ? 'person' : 'home',
            color: "#d75c77"
						
        };
 }
}).filter(Boolean); // Filtrar los objetos nulos


return resultado;
