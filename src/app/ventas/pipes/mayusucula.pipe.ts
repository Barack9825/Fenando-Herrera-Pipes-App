import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusuculasPipe implements PipeTransform {
  transform(value:any): string {
    return 'Hola Mundo';
  }
}
