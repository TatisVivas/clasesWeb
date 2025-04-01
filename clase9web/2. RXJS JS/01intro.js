import{Observable} from 'rxjs';

// Create an observable
//el observable emite los mensajes
//usamos $ para diferenciarlos


const observable$ = new Observable((subscriber) => {
    subscriber.next("hola"); //lo que emite el observable
    subscriber.next("mundo"); //lo que emite el observable
    subscriber.complete(); //completa el observable
});

//creamos un observador
//los observadores son los que reciben los mensajes del observable y tiene funciones que reaccionana a los mensajes emitidos por el observable
//next, error y complete son los metodos que se ejecutan cuando el observable emite un mensaje, hay un error o se completa el observable
// Es un JSON
let observer ={

    next: function(mensaje){
        console.log("recibiendo el siguiente mensaje: " + mensaje); //lo que recibe el observador
    },
    error: function(error){
        console.error("error: " + error); //lo que recibe el observador
    },
    complete: function(){
        console.log("completado"); //lo que recibe el observador
    }
       
}
//suscribirme
console.log("antes")
observable$.subscribe(observer);
console.log("despues")

//varios suscriptores

let observador ={
    next: function(mensaje){
        console.log("recibiendo el nuevo mensaje: " + mensaje); //lo que recibe el observador
    }
  
}

observable$.subscribe(observador); //suscribirme

const observableNumeros$= new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.complete();
    }
);
//suscribirme
console.log("suscribiendome a observableNumeros$")
observableNumeros$.subscribe(observador); //suscribirme