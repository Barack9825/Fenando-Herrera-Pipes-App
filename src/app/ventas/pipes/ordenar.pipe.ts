import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {
    switch (orderPor) {
      case 'nombre':
        return heroes.sort((heroeA, heroeB) =>
          heroeA.nombre > heroeB.nombre ? 1 : -1
        );
      case 'vuela':
         return heroes.sort((heroeA, heroeB) =>
          heroeA.vuela > heroeB.vuela ? -1 : 1
        );
      case 'color':
         return heroes.sort((heroeA, heroeB) =>
           heroeA.color > heroeB.color ? 1 : -1
         );
      default:
        return heroes;
    }
  }
}
