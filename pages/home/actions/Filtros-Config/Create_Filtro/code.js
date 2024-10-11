let objeto_filtro = {}
  objeto_filtro.nombre_tab ={{ui.nombre_tab.value}}
  objeto_filtro.orden_presentacion = {{ui.orden_presentacion.value}}  
  objeto_filtro.sla_nombre = JSON.stringify({{ui.sla_nombre.value}})
	objeto_filtro.provincias = JSON.stringify({{ui.provincias.value}})
  //objeto_filtro.estado_incidencia = JSON.stringify({{ui.select_estado_incidencia.value}})
  objeto_filtro.zonas =JSON.stringify({{ui.zonas.value}})
	objeto_filtro.proyecto = {{ui.proyecto.value}}
  //objeto_filtro.severidad = JSON.stringify({{ui.select_prio_incidencia.value}})
  //objeto_filtro.estado_sla = JSON.stringify({{ui.select_estado_sla.value}})
  objeto_filtro.ocultar_slas_vencidos = 1
  objeto_filtro.username = {{user.email}}
  objeto_filtro.interface_ID  = "Create_Filtro_Monitor|0930ad39-d90f-49c4-96d9-5943be41a431"
  objeto_filtro.id_filtro = 0
return objeto_filtro
