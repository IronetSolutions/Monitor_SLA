await {{actions.GetList_filtros_monitor.trigger()}}
{{state.alertState = false}}
await {{actions.recarga_datos.trigger()}}
await {{actions.aplicar_filtro_tab.trigger()}}
{{actions.lanza_contadores.trigger()}}