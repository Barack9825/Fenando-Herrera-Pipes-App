import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusuculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean = true): string {
    return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}
