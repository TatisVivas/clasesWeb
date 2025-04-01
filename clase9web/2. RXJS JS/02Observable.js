import{of, Observable, from, range, interval} from 'rxjs';

of("Hello", "to", "Everyone").subscribe((value) => {//of para enviar a todo aquel que se suscriba
    console.log("of",value); // Hello to Everyone
}); //que hago cuando me lleguen esos mensajes

from(["hello", "to", "everyone"]).subscribe({
    next: (value) => console.log("from", value), // hello to everyone
    error: (error) => console.error("error", error), // error
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes  

range(0,5).subscribe((mensaje) => { //envia los numeros del 0 al 5
    console.log("range", mensaje); // 0 1 2 3 4
});

function handMade(arreglo) {
    return new Observable((subscriber) => {
        for (let i = 0; i < arreglo.length; i++) {
            subscriber.next(arreglo[i]);
        }
        subscriber.complete();
    });
}
//suscribirme
handMade(["hello", "to", "everyone"]).subscribe({
    next: (value) => console.log("Handmade", value), // hello to everyone
    error: (error) => console.error("error", error), // error
    complete: () => console.log("complete"), // complete
}); //que hago cuando me lleguen esos mensajes  


interval(1000).subscribe((mensaje) => { //envia los numeros del 0 al 5 cada segundo
    console.log("interval", mensaje); // 0 1 2 3 4
});