// ? Funciones de utilidad

// Funcion para redondear la media de votos pasado como parámetro
export function roundAverage(average) {
  return Math.round(average * 10);
}

// Funcion para pasar de minutos a horas y minutos
export function convertMins(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  // Devolver horas y minutos si hay horas, si no, solo minutos
  return horas ? `${horas}h ${minutosRestantes}min` : `${minutosRestantes}min`;
}
