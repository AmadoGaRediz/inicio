import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule para usar @for
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  proyectos = [
    { nombre: 'Fundamentos', url: 'https://fundamentosamadogrti22.netlify.app/' },
    { nombre: 'Ejemplo 2', url: 'https://ejemplo2amadogrti22.netlify.app/' },
    { nombre: 'Ejemplo 3', url: 'https://ejemplo3amadogrti22.netlify.app/' },
    { nombre: 'Ejemplo 4', url: 'https://ejemplo4amadogrti22.netlify.app/' },
    { nombre: 'Ejemplo 5', url: 'https://ejemplo5amadogrti22.netlify.app/' }
  ];
}
