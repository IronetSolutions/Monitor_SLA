SELECT *,
    CASE
WHEN `fecha_inicio_pausa` IS NOT NULL AND `fecha_fin_pausa` IS NOT NULL THEN
            TIMESTAMPDIFF(MINUTE, `fecha_inicio_pausa`, `fecha_fin_pausa`)
        ELSE
            NULL
    END AS `diferencia_minutos`
FROM 
    `wfm_v2`.`v_ticket_slas_with_pauses`
WHERE task_id = '{{params.task}}';

SELECT
    v_sla_ticket.*,
    TIMESTAMPDIFF(MINUTE, fecha_inicio, fecha_fin) AS minutos_transcurridos,
    SUM(TIMESTAMPDIFF(MINUTE, ts.fecha_inicio_pausa, ts.fecha_fin_pausa)) AS total_minutos_pausa,
    CASE
        WHEN v_sla_ticket.estado = 'completado' THEN
            CASE
                WHEN v_sla_ticket.paradas = 1 THEN
                    CASE
                        WHEN (TIMESTAMPDIFF(MINUTE, fecha_inicio, fecha_fin) - SUM(TIMESTAMPDIFF(MINUTE, ts.fecha_inicio_pausa, ts.fecha_fin_pausa))) > duracion THEN 'Fail'
                        ELSE 'OK'
                    END
                WHEN v_sla_ticket.paradas = 0 THEN
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, fecha_inicio, fecha_fin) > duracion THEN 'Fail'
                        ELSE 'OK'
                    END
                ELSE 'OK'
            END
        ELSE NULL
    END AS SLAResult,
    CASE
        WHEN v_sla_ticket.estado IN ('completado', 'activo') THEN
            CASE
                WHEN v_sla_ticket.paradas = 1 THEN
                    DATE_ADD(v_sla_ticket.fecha_inicio, INTERVAL (v_sla_ticket.duracion + SUM(TIMESTAMPDIFF(MINUTE, ts.fecha_inicio_pausa, ts.fecha_fin_pausa))) MINUTE)
                WHEN v_sla_ticket.paradas = 0 THEN
                    DATE_ADD(v_sla_ticket.fecha_inicio, INTERVAL v_sla_ticket.duracion MINUTE)
                ELSE NULL
            END
        ELSE NULL
    END AS FechaLimite,
    CASE
        WHEN v_sla_ticket.estado IN ('activo', 'pausado') THEN
            CASE
                WHEN v_sla_ticket.paradas = 1 THEN
                    TIMESTAMPDIFF(MINUTE, fecha_inicio, CURRENT_TIMESTAMP) - SUM(TIMESTAMPDIFF(MINUTE, ts.fecha_inicio_pausa, ts.fecha_fin_pausa))
                WHEN v_sla_ticket.paradas = 0 THEN
                    TIMESTAMPDIFF(MINUTE, fecha_inicio, CURRENT_TIMESTAMP)
                ELSE NULL
            END
        ELSE NULL
    END AS RunningTime
FROM
    v_sla_ticket
LEFT JOIN (
    SELECT
        ticket_sla_id,
        fecha_inicio_pausa,
        fecha_fin_pausa
    FROM
        v_ticket_slas_with_pauses
) AS ts ON v_sla_ticket.ticket_sla_id = ts.ticket_sla_id
WHERE
    v_sla_ticket.task_id = '{{params.task}}'
GROUP BY
    v_sla_ticket.ticket_sla_id;

    

