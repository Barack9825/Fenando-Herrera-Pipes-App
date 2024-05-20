import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusuculasPipe } from './pipes/mayusucula.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';

@NgModule({
  declarations: [
    //componentes
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,

    //pipes
    MayusuculasPipe,
    OrdenarPipe,
    VuelaPipe,
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class VentasModule {}
