import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-films-component',
  styleUrl: './films-component.css',
  templateUrl: './films-component.html',
})
export class FilmsComponent {
  http = inject(HttpClient);
}
