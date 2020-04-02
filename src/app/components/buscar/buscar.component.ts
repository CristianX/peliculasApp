import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {


  buscar = '';

  // Llamando rutas del buscar del navbar con parámetros
  constructor( public _ps: PeliculasService, public router: ActivatedRoute ) {
    this.router.params.subscribe( parametros => {
      console.log(parametros);
      if ( parametros.texto ) {
      this.buscar = parametros.texto;
      this.buscarPelicula();
    } } );
  }

  ngOnInit(): void {
  }

  buscarPelicula() {
    if ( this.buscar.length === 0 ) {
      return;
    }

    this._ps.buscarPelicula( this.buscar ).subscribe();
  }


}
