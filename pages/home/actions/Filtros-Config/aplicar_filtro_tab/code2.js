if({{state.filtros_usuario == true}}){
  {{actions.semaforo.trigger({type: "recalcular_semaforo"})}}
  return {{steps.code.data}}
}