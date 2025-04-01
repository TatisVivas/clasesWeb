import {take, interval, map, merge, concat} from 'rxjs';

/*
const mergeExample=() =>{

    let obs1= interval(200). pipe(
        take(10),
        map((value) => "obs1:" + value * -2) 
    )
    let obs2= interval(400). pipe(
        take(10),
        map((value) => "obs2:" + value *10)
    )
    merge(obs1, obs2).subscribe((value) => console.log(value))
}
mergeExample()
*/

//1. verificar si sesión iniciada pet1
/*
id sesion:123
}
2. cargar datos pet 2

pueden llegar en desorden y mi página explota
*/

//controla flujo
const concatExample=() =>{

    let obs1= interval(200). pipe(
        take(10),
        map((value) => "obs1:" + value * -2) 
    )
    let obs2= interval(400). pipe(
        take(10),
        map((value) => "obs2:" + value *10)
    )
    concat(obs1, obs2).subscribe((value) => console.log(value))
}
concatExample()