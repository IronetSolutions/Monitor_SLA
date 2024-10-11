{{ui.modal_crear_filtro.close()}}
{{actions.notificacion.trigger({message: "Filtro guardado correctamente"})}}
{{ui.nombre_tab.reset()}}
{{ui.orden_presentacion.reset()}}
{{ui.proyecto.reset()}}
{{ui.provincias.reset()}}
{{ui.sla_nombre.reset()}}
{{ui.zonas.reset()}}
{{actions.aplicar_filtro_tab.trigger()}}
{{actions.recarga_datos.trigger()}}
return {{steps.code.data}}