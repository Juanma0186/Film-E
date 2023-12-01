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

// Funcion para formatear la fecha
export function formatDate(date) {
  const dateObject = new Date(date);

  // Obtener día, mes y año
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = getYear(date);
  // Crear una cadena con el formato deseado (DD-MM-YYYY)
  return `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;
}

// Funcion para obetener el año de la fecha
export function getYear(date) {
  const dateObject = new Date(date);
  return dateObject.getFullYear();
}
