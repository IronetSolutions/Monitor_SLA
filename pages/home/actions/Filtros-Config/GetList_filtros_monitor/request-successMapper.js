let datos_recogidos = {{data.datos}}

datos_recogidos.forEach(dato => {
  dato.ocultar_slas_vencidos = dato.ocultar_slas_vencidos === 1 ? true : false;
return datos_recogidos  
});
return datos_recogidos