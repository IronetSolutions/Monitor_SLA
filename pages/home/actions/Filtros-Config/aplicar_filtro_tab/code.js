if({{state.filtros_usuario == true}}){
  
  //Recuperamos el array de filtros almacenados en la variable y nos quedamos
	//con el filtro que machee con el nombre de la tab seledccionada

	let array_filtros = {{state.filtros_tab}}
  
	// Seleccionar el objeto a partir de "nombre_tab"

	const filtro_seleccionado = array_filtros.find(objeto => objeto.nombre_tab === {{ui.tabs_filter.selectedTab.nombre_tab}});    


	//Ahora vamos a pasar el filtro seleccionado a la variable "filtros_aplicar"                                     
	//Adaptamos el objeto filtro_seleccionado
	let filtro_normalizado = {}
                                               
	filtro_normalizado.nombre_sla = JSON.parse(filtro_seleccionado.sla_nombre)
	filtro_normalizado.zona = JSON.parse(filtro_seleccionado.zonas)
	filtro_normalizado.provincia = JSON.parse(filtro_seleccionado.provincias)                                     
	filtro_normalizado.status = JSON.parse(filtro_seleccionado.estado_incidencia)
	//filtro_normalizado.prioridad = JSON.parse(filtro_seleccionado.severidad)
	//filtro_normalizado.sla_vencido = filtro_seleccionado.ocultar_slas_vencidos
	//if(filtro_normalizado.sla_vencido == true){
		//filtro_normalizado.estado_sla = ["activo","pausado"]
	//}else if (filtro_normalizado.sla_vencido == false){
		//filtro_normalizado.estado_sla = ["completado"]
	//}

	{{state.filtros_aplicar}} = filtro_normalizado
	//{{ui.tabs_filter.selectTab(0)}}
	//{{actions.recarga_datos.trigger()}}
 {{ui.card_metricas.selectView("metricas")}}
 {{actions.query_vista_interfaz.trigger()}}
 
	return filtro_normalizado;
  
}

