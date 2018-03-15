import { Injectable } from '@angular/core';

@Injectable()
export class ProfileServiceService {

  constructor() { }

  private about:string = 'DC Comics es una editorial de cómics estadounidense. Forma parte de DC Entertainment,​ una de las empresas que conforman Warner Bros. Entertainment, la cual a su vez es propiedad de Time Warner. Fue fundada en 1934 bajo el nombre National Allied Publications, para luego tomar el nombre de DC Comics en 1937. Las iniciales «DC» son una abreviatura de Detective Comics, uno de los primeros títulos emblemáticos de la compañía. Entre algunos de sus personajes más emblemáticos se encuentran Superman, Batman, la Mujer Maravilla, Flash, Linterna Verde, Aquaman, Flecha Verde, Supergirl y grupos de héroes como Liga de la Justicia o Los Jóvenes Titanes. Material no relacionado a su universo heroico incluye a Watchmen, V de Vendetta, The Sandman y muchos otros, generalmente bajo subsellos editoriales como Vertigo o Milestone Media. Su sede principal estuvo situada históricamente en la ciudad de Nueva York, pero desde 2015 mudaron sus oficinas a la ciudad de Burbank';

getAbout(){
  return this.about;
}
}
