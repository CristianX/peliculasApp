import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input( 'peliculas' ) peliculas;
  // tslint:disable-next-line: no-input-rename
  @Input( 'titulo' ) titulo;

  constructor() { }

  ngOnInit(): void {
  }

}
