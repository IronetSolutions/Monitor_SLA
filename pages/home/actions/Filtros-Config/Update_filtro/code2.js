{{ui.modal_crear_filtro.close()}}
{{actions.notificacion.trigger({message: "Filtro guardado correctamente"})}}
await {{actions.GetList_filtros_monitor.trigger()}}
{{actions.aplicar_filtro_tab.trigger()}}
{{actions.recarga_datos.trigger()}}