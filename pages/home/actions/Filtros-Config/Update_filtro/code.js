let objeto_filtro = {}
  objeto_filtro.nombre_tab ={{ui.nombre_tab.value}}
  objeto_filtro.orden_presentacion = {{ui.orden_presentacion.value}}  
  objeto_filtro.sla_nombre = JSON.stringify({{ui.sla_nombre.value}})
	objeto_filtro.provincias = JSON.stringify({{ui.provincias.value}})
  objeto_filtro.zonas = JSON.stringify({{ui.zonas.value}})
	objeto_filtro.proyecto = {{ui.proyecto.value}}
  objeto_filtro.ocultar_slas_vencidos = 1
  objeto_filtro.username = {{user.email}}
  objeto_filtro.interface_ID  = "Update_Filtro_Monitor|da5283fd-c474-4a3f-8811-72fa6813dd23"
  objeto_filtro.id_filtro = {{ui.id_filtro.value}}
return objeto_filtro