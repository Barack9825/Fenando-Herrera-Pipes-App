import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule],
})
export class VentasModule {}