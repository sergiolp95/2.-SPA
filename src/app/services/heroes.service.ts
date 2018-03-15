
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

private heroes:Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Iron-Man",
      bio: "La película comienza con Anthony 'Tony' Stark empresario multimillonario y presidente de Stark Industries visitando a soldados de guardia en el Medio Oriente. Él bromea con algunos miembros de un convoy que parecen estar divirtiéndose genuinamente por su personalidad. De repente, el convoy es atacado por terroristas. Los soldados luchan para defenderse, pero mueren rápidamente uno por uno. Stark trata de pedir ayuda pero una bomba (ironicamente con el logotipo de su empresa, 'Stark Industries') explota demasiado cerca de él, perforando su chaleco blindado e hiriéndolo de gravedad en su pecho. Minutos más tarde Tony es capturado y grabado por un grupo de terroristas.​",
      img: "assets/img/ironMan.png",
      aparicion: "2008-04-30",
      casa: "Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Thor",
      bio: "Thor, cuyo nombre real es Thor Odinson conocido como Donald Blake en la tierra como su identidad secreta, es un superhéroe y príncipe-guerrero Asgardiano, el Semi-dios del Trueno, y un protector auto-proclamado de la Tierra. Thor, posteriormente, se volvió muy conocido por sus acciones en la Tierra. Thor tuvo una infancia buena, criado en Asgard como el atesorado hijo de Odín y su esposa Frigga. Su mejor amigo y compañero de juegos era su hermano adoptivo Loki y aunque eran rivales por el trono de su padre, ellos todavía permanecían como compañeros cercanos.",
      img: "assets/img/thor.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() {

  }
  getHeroes():Heroe[]{
    return this.heroes;
  }
  getHeroe(idx:number){
    return this.heroes[idx];
  }
  buscarHeroes(termino:string){
    let heroesArr:Heroe[]=[];
    termino = termino.toLowerCase();
    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        heroesArr.push(heroe)
      }
    }
    return heroesArr;
  }
}
export interface Heroe{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}
