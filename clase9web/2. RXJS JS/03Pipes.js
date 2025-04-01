import{take, interval, map, filter, reduce} from 'rxjs';

//pipes -1< Arquitectura de rxjs dodne se transforman los datos
/*
//dtos -> pipe -> datos modificados
interval(100).pipe(
    take(5), //toma los primeros 5 numeros
).subscribe({ //envia los numeros del 0 al 5 cada segundo
    next: (mensaje) => console.log("interval", mensaje), // 0 1 2 3 4
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes

interval(100).pipe(
    take(5), //toma los primeros 5 numeros
    map(dato => dato * 2), //multiplica los numeros por 2
).subscribe({ //envia los numeros del 0 al 5 cada segundo
    next: (mensaje) => console.log("interval", mensaje), // 0 1 2 3 4
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes

interval(100).pipe(
    take(5), //toma los primeros 5 numeros
    filter(dato => dato % 2 === 0), //filtra los numeros pares
    map(dato => dato * 2), //multiplica los numeros por 2
).subscribe({ //envia los numeros del 0 al 5 cada segundo
    next: (mensaje) => console.log("interval", mensaje), // 0 1 2 3 4
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes

interval(100).pipe(
    filter(dato => dato % 2 === 0), //filtra los numeros pares
    take(5), //toma los primeros 5 numeros
    map(dato => dato * 2), //multiplica los numeros por 2
).subscribe({ //envia los numeros del 0 al 5 cada segundo
    next: (mensaje) => console.log("interval", mensaje), // 0 1 2 3 4
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes
*/
interval(100).pipe(
    take(5), //toma los primeros 5 numeros
    filter(dato => dato % 2 === 0), //filtra los numeros pares
    map(dato => dato * 2), //multiplica los numeros por 2
    reduce((a, b) => a + b), //suma los numeros
).subscribe({ //envia los numeros del 0 al 5 cada segundo
    next: (mensaje) => console.log("interval", mensaje), // 0 1 2 3 4
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes