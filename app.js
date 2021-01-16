//Condicionales y Operadores Logicos

//Ejercicio 1 puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true



// const puedeVerPelicula = (edad, tieneAutorizacion) => {

// if (edad >= 15 || tieneAutorizacion === true){
//     return true;
// } else{
// return false;
// }
// };

// console.log(puedeVerPelicula(12, false)); // false
// console.log(puedeVerPelicula(12, true));  // true
// console.log(puedeVerPelicula(16, false)); // true
// console.log(puedeVerPelicula(18, true));  // true




//Ejercicio 2 estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false

// const estaEnRango = (valor, numeroMinimo, numeroMaximo) =>{
//     if (valor >= numeroMinimo && valor <= numeroMaximo){
//         return true;
//     } else{
//         return false;
//     }
// };

// console.log(estaEnRango(3, 1, 10));  // true
// console.log(estaEnRango(1, 1, 10));   // true
// console.log(estaEnRango(10, 1, 10));  // true
// console.log(estaEnRango(12, 1, 10));  // false
// console.log(estaEnRango(-3, 1, 10));  // false



//Ejercicio 3 puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

// const puedeAvanzar = (color) =>{
//     if (color === 'verde'){
//         return true;
//     } else if (color === 'amarillo' || color === 'rojo'){
//         return false;
//     }else{
//         return 'Error: color de semaforoinvalido'
//     };
//     }

// console.log(puedeAvanzar('verde'));     // true
// console.log(puedeAvanzar('amarillo'));  // false
// console.log(puedeAvanzar('rojo'));      // false
// console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'  





//Ejercicio 4 esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// esVocal('a') // true
// esVocal('n') // false

// const esVocal = (letra) => {
//  if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
//      return true;
//  } else {
//      return false;
//  }
// };

// console.log(esVocal('a'));
// console.log(esVocal('n'));






//Ejercicio 5 esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// esVocal('a') // false
// esVocal('n') // true

//  const esConsonante = (letra) => {
//   if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
//       return false;
//   } else {
//       return true;
//   }
//  };

//  console.log(esConsonante('a'));
//  console.log(esConsonante('n'));
//  console.log(esConsonante('j'));

//Otra forma de hacer el ejercicio, Test es como includes pero para expresion regulares.
// Test() = prueba una coincidencia en una cadena. Devuelve true or false

// const vocales = /^[aeiou0-9]$/i;
// const esVocal = (letra) => !vocales.test(letra);
// console.log(esVocal('f'));





//Ejercicio 6 esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true

// const esHoraValida = (hora) => {
//     const tiempo = hora.split(':');
//     const horas = tiempo[0];
//     const minutos = tiempo[1];

// if (horas <= 23 && minutos <=60){
//     return true;
// }else{
//     return false;
// }
// }; 

// console.log(esHoraValida('12:23')); // true
// console.log(esHoraValida('12:65')); // false
// console.log(esHoraValida('28:05')); // false
// console.log(esHoraValida('00:00')); // true


//Ejercicio 7 puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true
// puedeRenovarCarnet(true, false, false)  // false
// puedeRenovarCarnet(false, true, true)   // false
// puedeRenovarCarnet(false, true, false)  // false
// puedeRenovarCarnet(false, false, true)  // false
// puedeRenovarCarnet(false, false, false) // false

// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
//     if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(puedeRenovarCarnet(true, true, true));    // false
// console.log(puedeRenovarCarnet(true, true, false));   // false
// console.log(puedeRenovarCarnet(true, false, true));   // true
// console.log(puedeRenovarCarnet(true, false, false));  // false
// console.log(puedeRenovarCarnet(false, true, true));   // false
// console.log(puedeRenovarCarnet(false, true, false));  // false
// console.log(puedeRenovarCarnet(false, false, true));  // false
// console.log(puedeRenovarCarnet(false, false, false)); // false




//Ejercicio 8 puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false

// const  puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>{

// if (asistencia >= 75 && materiasAprobadas >=50 && tesisAprobada === true){
//     return true;
// } else {
//     return false;
// }
// };

// console.log(puedeGraduarse(80, 50, true));  // true
// console.log(puedeGraduarse(80, 50, false)); // false
// console.log(puedeGraduarse(80, 45, true));  // false
// console.log(puedeGraduarse(80, 45, false)); // false
// console.log(puedeGraduarse(65, 50, true));  // false
// console.log(puedeGraduarse(33, 55, false)); // false
// console.log(puedeGraduarse(42, 45, true));  // false
// console.log(puedeGraduarse(28, 45, false)); // false




//Ejercicios con condicionales

//Ejercicio 9 esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

// const esParOImpar = (numero) => {
//     if(numero % 2 === 0){
//         return 'par';
//     } else {
//         return 'impar'
//     }  
// }; 

// console.log(esParOImpar(3));  // 'impar'
// console.log(esParOImpar(10)); // 'par'




//Ejercicio 10 esPositivoONegativo(numero)
// Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'

// const esPositivoONegativo = (numero) => {
//     if (numero >= 0){
//         return 'positivo';
//     } else {
//         return 'negativo'
//     }
// };

// console.log(esPositivoONegativo(3));  // 'positivo'
// console.log(esPositivoONegativo(-5)); // 'negativo'





//Ejercicio 11 avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

// const avanzarSemaforo = (colorActual) => {
//   if (colorActual === 'verde'){
//       return 'amarillo';
//   } else if (colorActual === 'amarillo'){
//       return 'rojo';
//   } else if (colorActual === 'rojo'){
//       return 'verde';
//   } else{
//       return 'No es un color valido'
//   }
// };


// console.log(avanzarSemaforo('verde'));     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'));  // 'rojo'
// console.log(avanzarSemaforo('rojo'));      // 'verde'





//Ejercicio 12 obtenerDiasMes(mes)
// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29

// const obtenerDiasMes = (mes) => {
// switch (mes) {
//     case 'enero' :
//         return 31;
//         case 'enero' :
//         return 31;
//         case 'febrero' :
//         return 28;
//         case 'marzo' :
//         return 31;
//         case 'abril' :
//         return 30;
//         case 'mayo' :
//         return 31;
//         case 'junio' :
//         return 30;
//         case 'julio' :
//         return 31;
//         case 'agosto' :
//         return 31;
//         case 'setiembre' :
//         return 30;
//         case 'octubre' :
//         return 31;
//         case 'noviembre' :
//         return 30;
//         case 'diciembre' :
//         return 31;
// }
// };

// console.log(obtenerDiasMes("diciembre")); // 31
// console.log(obtenerDiasMes("febrero"));   // 28





//Ejercicio 13 obtenerGeneracion(anioNacimiento)
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010

// const obtenerGeneracion = (anioNacimiento) => {
//     if (anioNacimiento >= 1949 && anioNacimiento <= 1968){
//         return 'Baby boomer';
//     } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980){
//         return 'Generacion X';
//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         return 'Millennials';
//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         return 'Generación Z';
//     } else{
//       return ' sin mas opciones'
//     }
// };

// console.log(obtenerGeneracion(1950));




//Ejecicio 14 obtenerSensacion(temperatura)
// Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// Temperatura	Mensaje
// Menor a 0°	¡Está helando!
// Mayor o igual a 0° y menor a 15°	¡Hace frío!
// Mayor o igual a 15° y menor a 25°	Está lindo
// Mayor o igual a entre 25° y menor a 30°	Hace calor
// Mayor o igual de 30°	¡Hace mucho calor!
// obtenerSensacion(33) // "¡Hace mucho calor!"

// const obtenerSensacion = (temperatura) => {
//     if ( temperatura < 0){
//         return '¡Esta helando!';
//     } else if (temperatura >= 0 && temperatura <= 15){
//         return '¡Hace Frío!';
//     } else if ( temperatura >=15 && temperatura <=25){
//         return 'Esta lindo';
//     } else if ( temperatura >= 25 && temperatura <= 30){
//         return 'Hace Calor';
//     } else {
//         return '¡Hace mucho calor'
//     }
// };

// console.log(obtenerSensacion(33)); // "¡Hace mucho calor!"
// console.log(obtenerSensacion(-2));
// console.log(obtenerSensacion(20));



// const obtenerSensacion = (temperatura) => {
//     switch (true) {
//         case (temperatura < 0):
//             return '¡Esta helando!';
//         case (temperatura >= 0 && temperatura <= 15):
//             return '¡Hace Frío!';
//         case (temperatura >= 15 && temperatura <= 25):
//             return 'Esta lindo';
//         case (temperatura >= 25 && temperatura <= 30):
//             return 'Hace Calor';
//         case (temperatura > 30):
//             return '¡Hace mucho calor';
//     }
// };

// console.log(obtenerSensacion(33)); // "¡Hace mucho calor!"
// console.log(obtenerSensacion(-2));
// console.log(obtenerSensacion(20));



//Ejercicio 15 Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido

// obtenerNota(7)    // "Bueno"
// obtenerNota(9.6)  // "Excelente"
// obtenerNota(12)   // "Puntaje inválido"

// const obtenerNota = (puntaje) => {
//     const redondeado = Math.round(puntaje);
//     if (redondeado < 6) {
//         return 'Desaprobado';
//     } else if (redondeado >= 6 && redondeado < 7) {
//         return 'Regular';
//     } else if (redondeado >= 7 && redondeado < 8) {
//         return 'Bueno';
//     } else if (redondeado >= 8 && redondeado < 10) {
//         return 'Muy Bueno';
//     } else if (redondeado === 10) {
//         return 'Excelente';
//     } else {
//         return 'Puntaje inválido';
//         }
// };

// console.log(obtenerNota(7));    // "Bueno"
// console.log(obtenerNota(9.6));  // "Excelente"
// console.log(obtenerNota(12));   // "Puntaje inválido")



//Ejercicio 16 jugarPiedraPapelTijera(a, b)
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!


// const jugarPiedraPapelTijera = (a,b) => {
    // if ((a === 'piedra' || a === 'tijera' || a === 'papel') && (b === 'piedra' || b === 'tijera' || b === 'papel')){

//     if ( a === 'tijera' && b === 'papel' || a=== 'papel' && b === 'tijera'){
//         return 'Gano Tijera';
//     } else if ( a=== 'papel' && b === 'piedra' || a === 'piedra' && b === 'papel'){
//         return 'Gano papel';
//     } else if ( a=== 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra'){
//         return 'Gano Piedra';
//     } else {
//         return 'empate'
//     }
// } else {     
//     return 'No sabe jugar'
// }

// };

// console.log(jugarPiedraPapelTijera('tijera', 'piedra'));  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('piedra', 'tijera'));  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('papel', 'piedra'));   // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('piedra', 'papel'));   // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('papel', 'tijera'));   // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('tijera', 'papel'));   // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'));  // ¡Empate!
// console.log(jugarPiedraPapelTijera('papel', 'papel'));    // ¡Empate!
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'));  // ¡Empate!

