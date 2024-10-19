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
		//if(tarea.prioridad == 1 || tarea.prioridad == 2){tipo = "P1-P2"}          
    //if(tarea.prioridad == 3 || tarea.prioridad == 4 || tarea.prioridad == 5){tipo = "P3-P5"}	
		if (tarea.minutos_restantes < {{state.semaforo.rojo[1]}}) {
 		 	tipo = "Rojo";
		} else if (tarea.minutos_restantes < {{state.semaforo.amarillo[1]}}) {
  		tipo = "Ambar";
		} else if (tarea.minutos_restantes < {{state.semaforo.verde[1]}}) {
  		tipo = "Verde";
}

    if (latitud !== null && longitud !== null) {
        return {
            lat: latitud,
            lng: longitud,
            nombre: `${tarea.task_id}`,
						tipo: tipo,          

        };
 }
}).filter(Boolean); // Filtrar los objetos nulos

console.log(resultado)
return resultado;
