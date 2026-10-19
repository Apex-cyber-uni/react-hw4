import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Film } from '../models/Film';

@Component({
  imports: [],
  selector: 'app-films-component',
  styleUrl: './films-component.css',
  templateUrl: './films-component.html',
})
export class FilmsComponent {
  _http = inject(HttpClient);
  film = signal<any>({});
  getFilmByTitle(title:string, plot:string, year:string){
    let _url:string = `https://www.omdbapi.com/?t=${title}&plot=${plot}&apikey=b6a5e17`;
    if (year != "") _url+=`&y=${year}`;
    this._http.get(_url).subscribe((data=> this.film.set(data as Film)));
  }  
}
