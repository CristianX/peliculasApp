import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// Servicio
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor(public _ps: PeliculasService, public router: ActivatedRoute ) {
    this.router.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros.pag;
      // Esto es para la cuarta ruta creada, si recibe algún parametro se adjunta a busqueda
      if ( parametros.busqueda ) {
        this.busqueda = parametros.busqueda;
      }
      this._ps.getPelicula( parametros.id ).subscribe( pelicula => { console.log(pelicula); this.pelicula = pelicula; } );
    } );
   }

  ngOnInit(): void {
  }

}
