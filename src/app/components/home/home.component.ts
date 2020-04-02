import { Component, OnInit } from '@angular/core';


import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinios: any;

  constructor( public _ps: PeliculasService ) {
    this._ps.getCartelera().subscribe( data => this.cartelera = data );
    this._ps.getPopulares().subscribe( data => this.populares = data );
    this._ps.getPopulresNinios().subscribe( data => this.popularesNinios = data );
   }

  ngOnInit(): void {
  }

}
