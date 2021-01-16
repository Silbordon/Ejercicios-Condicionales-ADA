const avanzarSemaforo = (colorActual) => {
    let mensaje = null;

    switch (colorActual) {
        case 'verde':
            mensaje = 'amarillo'
            break;
        case 'amarillo':
            mensaje = 'rojo'
            break;
        case 'rojo':
            mensaje = 'verde'
            break;
        default:
            mensaje = ''
    }
    console.log(mensaje);
};

console.log(avanzarSemaforo('verde'));     // 'amarillo'
console.log(avanzarSemaforo('amarillo'));  // 'rojo'
console.log(avanzarSemaforo('rojo'));      // 'verde'