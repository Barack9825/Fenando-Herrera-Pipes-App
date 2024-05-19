import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduadrdo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  cambiarCliente() {
    this.nombre = 'Melisa';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }

  //keyvaluePipe

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Otawa, Canada',
  };

  //JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //AsyncPipe
  miObservable = interval(2000);
  valorPromesa = new Promise((resolve, reyect) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa")
    },3500)
  });
}


