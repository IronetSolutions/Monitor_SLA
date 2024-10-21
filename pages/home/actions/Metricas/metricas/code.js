if({{state.linea_seleccionada.estado != "completado"}}){
  {{ui.card_metricas.selectView("metricas")}}
	let minutos_restantes_a_numero = parseInt({{state.linea_seleccionada.minutos_restantes}}, 10)
	let minutos_gastados = ({{state.linea_seleccionada.duracion}}) - minutos_restantes_a_numero
	return calcularPorcentaje(minutos_gastados,{{state.linea_seleccionada.duracion}})
}else { {{ui.card_metricas.selectView("sla_vencido_completado")}} }
