{{actions.CargarDatos.trigger()}}
{{state.incidencias_rojo = 0}}
{{state.incidencias_amarillo = 0}}
{{state.incidencias_verde = 0}}
{{state.incidencias_gris = 0}}
{{state.contadores = []}}
{{actions.slas_definidos.trigger()}}
{{state.filtros_aplicar}} =
{
  nombre_sla: [],
  zona: [],
  provincia: [],
  status: [],
  sla_vencido: true
}
