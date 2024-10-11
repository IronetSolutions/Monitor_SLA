INSERT INTO slas_vantage.filtros_monitor 
(estado_incidencia, zonas, sla_nombre, ocultar_slas_vencidos, orden_presentacion, nombre_tab, username, provincias, severidad, proyecto) 
SELECT estado_incidencia, zonas, sla_nombre, ocultar_slas_vencidos, orden_presentacion, nombre_tab, '?', provincias, severidad, proyecto
FROM slas_vantage.filtros_monitor
WHERE username = 'general';
