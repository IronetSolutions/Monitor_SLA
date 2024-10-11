// Available in actions and components base on scope

function toLocalDate(date) {
  return date.toLocaleDateString();
}

function toMysqlDate(date) {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

function redondearNumero(num) {
    return parseFloat(num.toFixed(4));
}
function calcularPorcentaje(parte, total) {
    return ((parte / total) * 100).toFixed(2);
}