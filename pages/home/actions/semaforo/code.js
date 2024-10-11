let incidencias

// Variables para almacenar los conteos
{{state.incidencias_rojo}} = 0;
{{state.incidencias_amarillo}} = 0;
{{state.incidencias_verde}} = 0;
{{state.incidencias_gris}} = 0;
  
incidencias = await {{actions.query_vista_interfaz.data.datos}};

// Verificar si la data está vacía o no está definida
if (!incidencias || incidencias.length === 0) {
  console.log("No hay incidencias disponibles.");
} else {
  console.log("Incidencias cargadas:", incidencias);

  // Iterar a través del array y contar según 'minutos_restantes'
  incidencias.forEach(tarea => {
    // Verificar si 'minutos_restantes' es null o undefined antes de aplicar parseInt
    let minutosRestantes = tarea.minutos_restantes;

    if (minutosRestantes === null || minutosRestantes === undefined) {
      {{state.incidencias_gris}}++;
    } else {
      // Aplicar parseInt solo si no es null o undefined
      minutosRestantes = parseInt(minutosRestantes, 10);

      if (isNaN(minutosRestantes)) {
        {{state.incidencias_gris}}++;  // También manejar el caso de NaN
      } else if (minutosRestantes < {{state.semaforo.rojo[1]}}) {
        {{state.incidencias_rojo}}++;
      } else if (minutosRestantes >= {{state.semaforo.amarillo[0]}} && minutosRestantes <= {{state.semaforo.amarillo[1]}}) {
        {{state.incidencias_amarillo}}++;
      } else if (minutosRestantes > {{state.semaforo.verde[0]}}) {
        {{state.incidencias_verde}}++;
      }
    }
  });
}



if({{params.type}} == "recalcular_semaforo"){
  if({{ui.input_semaforo_rojo.value < ui.input_semaforo_ambar.value}} && {{ui.input_semaforo_ambar.value < ui.input_semaforo_verde.value}}){
      {{state.semaforo.rojo[1] = ui.input_semaforo_rojo.value}}
  		{{state.semaforo.amarillo[0] = ui.input_semaforo_rojo.value}}
  		{{state.semaforo.amarillo[1] = ui.input_semaforo_ambar.value}}
  		{{state.semaforo.verde[0] = ui.input_semaforo_ambar.value}}
  		{{state.semaforo.verde[1] = ui.input_semaforo_verde.value}}
      {{ui.modal_semaforo.close()}}
      {{ui.input_semaforo_rojo.reset()}}
      {{ui.input_semaforo_ambar.reset()}}
      {{ui.input_semaforo_verde.reset()}}
      //{{actions.puntos_mapa.trigger()}}
      //{{actions.metricas.trigger()}}
     }else {
    {{actions.notificacion.trigger({message: "Configuración no valida para semáforo. ¡¡No se puede poner rojo antes que ambar, ni ambar antes que verde...!!"})}}
  }
}
  
if({{params.type == "reset_configurar_semaforo"}}){
  	{{ui.input_semaforo_rojo.reset()}}
    {{ui.input_semaforo_ambar.reset()}}
    {{ui.input_semaforo_verde.reset()}} 
}
  
if({{params.type == "semaforo_defecto"}}){
  {{state.semaforo}} = {
			rojo: [0,60],
 	  	amarillo: [60,180],
  		verde: [180,43200]
	}
  {{actions.notificacion.trigger({message: "Aplicados los valores por defecto al semáforo"})}}
  {{actions.semaforo.trigger({type: "recalcular semaforo"})}}
  {{actions.puntos_mapa.trigger({params: ""})}}
}  