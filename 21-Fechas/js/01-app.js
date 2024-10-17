const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();      // Enero es 0
valor = diaHoy.getHours();
valor = diaHoy.getMinutes();
valor = diaHoy.getTime();       // Numero de milisegundos desde el 1 de Enero de 1970
valor = diaHoy.setFullYear(2020);



console.log(valor);