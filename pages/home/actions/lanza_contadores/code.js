// Función principal que gestiona el bucle
async function procesarDatos() {
  let tabs = {{state.filtros_tab}};
  let contadores = [];

  // Recorremos el array de tabs
  for (const objeto of tabs) {
    // Actualizar los filtros
    {{state.filtros_contador.nombre_sla}} = JSON.parse(objeto.sla_nombre);
    //{{state.filtros_contador.sla_vencido}} = JSON.parse(objeto.ocultar_slas_vencidos);
    {{state.filtros_contador.prioridad}} = JSON.parse(objeto.severidad);
    {{state.filtros_contador.zona}} = JSON.parse(objeto.zonas);
    {{state.filtros_contador.provincia}} = JSON.parse(objeto.provincias);
    {{state.filtros_contador.status}} = [];
    
    //if ({{state.filtros_contador.sla_vencido}} === true) {
      //{{state.filtros_contador.estado_sla}} = ["activo", "pausado"];
    //} else if ({{state.filtros_contador.sla_vencido}} === false) {
      //{{state.filtros_contador.estado_sla}} = ["activo", "pausado", "completado"];
    //}

    // Ejecutar la acción query_count y esperar que termine
    await {{actions.query_vista_interfaz_count.trigger()}};

    // Solo después de que se haya completado, almacena los resultados en `contadores`
    contadores.push({
      title: objeto.nombre_tab,
      value: {{actions.query_vista_interfaz_count.data.total}},
      color: "success"
    });
  }

  return contadores;
}

// Llamar a la función principal
procesarDatos().then(contadores => {
  console.log(contadores)
  {{state.contadores}} = contadores
});
