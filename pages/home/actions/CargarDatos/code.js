{{ 
state.alertState=true;
state.alertInfo="Cargando datos. Por favor, espere unos segundos...";
await actions.GetList_filtros_monitor.trigger();
    //if(state.iniStatus==true){actions.aplicar_filtro_tab.trigger()}


if(actions.GetList_filtros_monitor.data.length ==0){
			state.alertInfo="Para comenzar añada un Filtro desde el icono 'Filtro' en la parte superior derecha. Puede Importar los Generales para Comenzar";
}else{
        state.alertState = false
  			//actions.aplicar_filtro_tab.trigger()
  			actions.auto_actualiza_datos.trigger()
}
}}