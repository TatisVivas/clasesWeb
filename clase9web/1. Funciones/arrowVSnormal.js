class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    printName(){
        function extendName(){
            console.log(this.nombre); //contexto global y this no existe
        }

        extendName(); // undefined, porque this no se refiere a la instancia de Animal
    }

    printNameArrow(){
        const extendName = () => {
            console.log(this.nombre);
        }

        extendName(); // "gato", porque this se refiere a la instancia de Animal
    }


}

let animal = new Animal("gato");
//animal.printName(); // undefined
animal.printNameArrow(); // "gato"