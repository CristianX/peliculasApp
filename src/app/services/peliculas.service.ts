import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '3e1fe3cddd0ef7be3281cb360156f907';
  private urlMovieDB = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor( private http: HttpClient ) { }


  getPopulares() {
    // Para llamar a la url de populares se debe adjuntar el apiKey con &api_key=${this.apiKey}&language=es`
    const url = `${ this.urlMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get( url ).pipe( map( (res: any) => res.results ));
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    // Sumando 7 días a la fecha actual
    hasta.setDate( hasta.getDate() + 7 );

    const desdeStr = desde.toISOString().substring(0, 10);
    const hastaStr = hasta.toISOString().substring(0, 10);

    // Para llamar a la url de populares se debe adjuntar el apiKey con &api_key=${this.apiKey}&language=es`
    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMovieDB }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apiKey }&language=es`;

    return this.http.get( url ).pipe( map( (res: any) => res.results ));
  }

  getPopulresNinios() {
    // Para llamar a la url de populares se debe adjuntar el apiKey con &api_key=${this.apiKey}&language=es`
    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMovieDB }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get( url ).pipe( map( (res: any) => res.results ));
  }

  buscarPelicula( texto: string ) {

    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMovieDB }/search/movie?api_key=${ this.apiKey }&query=${ texto }&language=es`;

    // tslint:disable-next-line: max-line-length
    return this.http.get( url ).pipe( map( (res: any) => { this.peliculas = res.results; console.log(this.peliculas); return res.results; } ));
  }

  getPelicula( id: string ) {
    // Para llamar a la url de populares se debe adjuntar el apiKey con &api_key=${this.apiKey}&language=es`
    const url = `${ this.urlMovieDB }/movie/${ id }?api_key=${ this.apiKey }&language=es`;

    // En este método hay que borrar el result, o a su vez si produce un undifined
    return this.http.get( url ).pipe( map( (res: any) => res ));
  }

}
