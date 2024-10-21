if({{params.type == "slas_tarea"}}){
  //{{ui.card_modal_slas.selectView("slas_task")}}
  {{state.view_card = "slas_task"}}
  {{state.task_id = params.datos.task_id}}
  {{actions.loadSLAs_task.trigger({task: state.task_id})}}
  {{ui.modal_detalle_incidencia.open()}}
}

if({{params.type == "detalle_tarea"}}){
  //{{ui.card_modal_slas.selectView("detail_task")}}
  {{state.linea_seleccionada = params.datos}}
  {{state.view_card = "detail_task"}}
  {{state.task_id = params.datos.task_id}}
  //{{state.task_id = state.linea_seleccionada.task_id}}
  {{actions.GetTask.trigger({task_id: state.linea_seleccionada})}}
  {{ui.modal_detalle_incidencia.open()}}
  //{{ui.tabs_filter.selectTab(0)}}
}

if({{params.type == "detalle_tarea_mapa"}}){
  //{{ui.card_modal_slas.selectView("detail_task")}}
  {{state.view_card = "detail_task"}}
  {{state.task_id = state.incidencia_mapa.nombre}}
  //actions.GetTask.trigger({task_id: state.incidencia_mapa.name})}}
  {{actions.GetTask.trigger({task_id: state.linea_seleccionada.task_id})}}
  {{ui.modal_detalle_incidencia.open()}}
  //{{ui.tabs_filter.selectTab(0)}}
}



if({{params.type == "recuperar_filtro"}}){
  {{state.modo_modal_filtro = "editar"}}
  {{ui.modal_crear_filtro.open()}}
  //{{ui.btn_guardar_filtro.setDisabled(true)}}
  {{ui.nombre_tab.setValue(params.datos.nombre_tab)}}
  //{{ui.sla_nombre.setValue(JSON.parse(params.datos.sla_nombre))}}
  //{{ui.select_estado_incidencia.setValue(JSON.parse(params.datos.estado_incidencia))}}
  {{ui.zonas.setValue(JSON.parse(params.datos.zonas))}}
  {{ui.provincias.setValue(JSON.parse(params.datos.provincias))}}
  {{ui.proyecto.setValue(params.datos.proyecto)}}
  {{ui.sla_nombre.setValue(JSON.parse(params.datos.sla_nombre))}}
  {{ui.id_filtro.setValue(params.datos.id_filtro)
  //{{ui.select_prio_incidencia.setValue(JSON.parse(params.datos.severidad))}}
  //{{ui.select_estado_sla.setValue(JSON.parse(params.datos.estado_sla))}}
  //{{ui.toggle_sla_vencido.setValue(params.datos.ocultar_slas_vencidos)}}
  {{ui.orden_presentacion.setValue(params.datos.orden_presentacion)}}
  //{{ui.modal_filtros_bbdd.close()}}
}

if({{params.type == "modal_crear_filtro"}}){
  {{ui.modal_crear_filtro.open()}}
  {{state.modo_modal_filtro = "nuevo"}}
}

if({{params.type == "linea_seleccionada"}}){
  {{state.linea_seleccionada = params.linea}}
  {{actions.metricas.trigger()}}
}


if({{params.type == "configurar_semaforo"}}){
  {{ui.modal_semaforo.open()}}
}

if({{params.type == "cargar_semaforo_guardado"}}){

  	 	{{ui.input_semaforo_rojo.setValue(params.datos.rojo_alto)}}
  		{{ui.input_semaforo_ambar.setValue(params.datos.ambar_alto)}}
  		{{ui.input_semaforo_verde.setValue(params.datos.verde_alto)}}
  
  {{ui.modal_mis_semaforos.close()}}
  {{actions.semaforo.trigger({type: "recalcular_semaforo"})}}
  {{actions.notificacion.trigger({message: "Se ha aplicado el semáforo seleccionado"})}}
  
  return {{params.datos}}
}

if({{params.type == "limpiar_filtros"}}){
  //{{ui.sla_nombre.reset()}}
  {{ui.select_zona.reset()}}
  {{ui.select_estado_incidencia.reset()}}
  //{{ui.select_prio_incidencia.reset()}}
  //{{ui.select_estado_sla.reset()}}
  //{{ui.toggle_sla_vencido.reset()}}
  {{ui.orden_presentacion.reset()}}
  {{ui.nombre_tab.reset()}} 
  {{state.filtros_aplicar}} = {
  	nombre_sla: [],
  	zona: [],
  	provincia: [],
  	status: [],
  	prioridad: [],
    sla_vencido: true,
    estado_sla: []
		}
  //{{ui.tabs_filter.selectTab(0)}}
  {{actions.recarga_datos.trigger()}}
   return {{params}}
  {{actions.puntos_mapa.trigger()}}
 
}

if({{params.type == "filtros_bbdd"}}){
  {{ui.modal_filtros_bbdd.open()}}
  {{actions.GetList_filtros_monitor.trigger()}}
}

if({{params.type == "select_tab_incidencia"}}){
 		if({{ui.tabs_modal_incidencia.selectedIndex == 1}}){
      {{ui.card_modal_slas.selectView("slas_task")}}
      {{actions.loadSLAs_task.trigger({task: state.task_id})}}
    }
    if({{ui.tabs_modal_incidencia.selectedIndex == 0}}){
      {{ui.card_modal_slas.selectView("detail_task")}}
    }	
		if({{ui.tabs_modal_incidencia.selectedIndex == 2}}){
      {{ui.card_modal_slas.selectView("notificar_task")}}
    }
}  



if({{params.type == "open_config"}}){
  {{ui.frameDrawer_config.open()}}
  {{actions.slas_definidos.trigger()}}
}
if({{params.type == "aplicar_filtro"}}){
	let filtro = {}
  filtro.nombre_sla = []
  //filtro.nombre_sla.push(...{{ui.sla_nombre.value}})
  //filtro.nombre_sla.push(...{{ui.sla_nombre.value}})
  filtro.zona = {{ui.select_zona.value}}
  //filtro.zona = filtro.zona.map(n => +n)  
  filtro.status = {{ui.select_estado_incidencia.value}}
  //filtro.status = filtro.status.map(n => +n)  
  //filtro.prioridad = {{ui.select_prio_incidencia.value}}
  //filtro.prioridad = filtro.prioridad.map(n => +n);
  //filtro.sla_vencido = {{ui.toggle_sla_vencido.value}}

  //filtro.estado_sla = {{ui.select_estado_sla.value}}
  //filtro.estado_sla = filtro.estado_sla.map(n => +n) 
  //filtro.estado_sla = []  
  //if({{ui.toggle_sla_vencido.value}} == false) {
  //    	filtro.estado_sla = ['activo','pausado','completado']
  
  //}else if({{ui.toggle_sla_vencido.value}} == true){
  //     	filtro.estado_sla = ["activo","pausado"]
   		
  //}
  {{state.filtros_aplicar}} = filtro
  {{actions.recarga_datos.trigger()}}
  {{actions.metricas.trigger()}}
  return filtro
}

//if({{params.type == "modificar_filtro"}}){

// Array de objetos original
//const datos = {{state.filtros_tab}}

// Nueva severidad que quieres asignar
//const nuevaSeveridad = {{ui.select_prio_incidencia.value}}

// Modificar la propiedad severidad de cada objeto
//datos.forEach(objeto => {
//  objeto.severidad = nuevaSeveridad;
//});

// Mostrar el resultado
//console.log(datos);


//}

if({{params.type == "cerrar_modal_filtro"}}){
  {{ui.modal_crear_filtro.resetValue()}}
}
  
if({{params.type == 'guardar_filtro_monitor'}}){
	if({{state.modo_modal_filtro == "nuevo"}}){
    {{actions.Create_Filtro.trigger()}}
  }
  if({{state.modo_modal_filtro == "editar"}}){
    {{actions.Update_filtro.trigger()}}
  }
}
  
if({{params.type == "slas_completados"}}){
		if({{ui.toggle_slas_completados.value == true}}){
      {{state.slas_completados = ['activo','pausado','completado']}}
      {{ui.toggle_slas_alcanzables.setValue(false)}}
      {{state.minutos_restantes = -90000000}}
      {{actions.recarga_datos.trigger()}}
    }
  		if({{ui.toggle_slas_completados.value == false}}){
      {{state.slas_completados = ['activo','pausado']}}
      {{ui.toggle_slas_alcanzables.setValue(true)}}
      {{state.minutos_restantes = 0}}  
      {{actions.recarga_datos.trigger()}}  
    }
}
  
if({{params.type == "slas_alcanzables"}}){
		if({{ui.toggle_slas_alcanzables.value == true}}){
      {{ui.toggle_slas_completados.setValue(false)}}
      {{state.slas_completados = ['activo','pausado']}}
      {{state.minutos_restantes = 0}}
      //{{actions.Inicio.trigger()}}
      //{{actions.query_vista_interfaz.trigger()}} 
      {{actions.recarga_datos.trigger()}}
    }
  	if({{ui.toggle_slas_alcanzables.value == false}}){
      {{state.minutos_restantes = -90000000}}
      //{{actions.Inicio.trigger()}}
      //{{actions.query_vista_interfaz.trigger()}} 
      {{actions.recarga_datos.trigger()}}
    }
}
  
if({{params.type == "notificar"}}){
		if({{params.email == true}}){
      {{actions.email.trigger({tarea: state.task_id, login: user.email, mensaje: params.mensaje, token: params.token})}}
      {{ui.txt_mensaje.reset()}}
    }
  	if({{params.telegram == true}}){
      {{actions.telegram.trigger({tarea: state.task_id, mensaje: params.mensaje, token: params.token})}}
      {{ui.txt_mensaje.reset()}}
    }
}
