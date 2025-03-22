import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

  palabras: string[] = ['Libros', 'Videojuegos', 'Peliculas', 'Series']
  palabraAc: string = ' ';
  i: number = 0;

  private intevaloId: any;

  ngOnInit(): void {
      this.PalabrasCambio();
  }

  ngOnDestroy(){
    if (this.intevaloId) {
      clearInterval(this.intevaloId);
      this.intevaloId = null;
    }
  }

  PalabrasCambio(){
    if (this.intevaloId) {
      clearInterval(this.intevaloId)
    }

    this.palabraAc = this.palabras[0];
    this.intevaloId = setInterval(() => {
      this.i = (this.i + 1)  % this.palabras.length;
      this.palabraAc = this.palabras[this.i]
    }, 3000)
  }


}
