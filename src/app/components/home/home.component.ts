import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit, OnDestroy {


  palabras: string[] = ['Libros', 'Videojuegos', 'Peliculas', 'Series'];
  palabraActual: string = this.palabras[0];
  indice: number = 0;
  private intervaloId: any;


  ngOnInit(): void {
    this.iniciarSecuencia();
  }

  ngOnDestroy() {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
      this.intervaloId = null;
    }

  }

  iniciarSecuencia() {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
    this.palabraActual = this.palabras[0];
    this.intervaloId = setInterval(() => {
      this.indice = (this.indice + 1) % this.palabras.length;
      this.palabraActual = this.palabras[this.indice];
    }, 3000);
  }

}
