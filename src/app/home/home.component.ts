import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    'https://i.pinimg.com/736x/40/ff/e9/40ffe966a442b3d5712b0178afcc16ad.jpg',
    'https://i.pinimg.com/736x/84/a0/a0/84a0a065c010b68fe81aadd440ee7c64.jpg',
    'https://i.pinimg.com/736x/3c/78/d9/3c78d94682e6acdf4819750061901e12.jpg',
    'https://i.pinimg.com/736x/9f/2c/a3/9f2ca32b08d080d98768b3785b824a5b.jpg'
  ];

  categorias = ["Libros", "Videojuegos", "Películas", "Series"];
  TimeImagen = this.images[0];
  TimeCat = this.categorias[0];
  private intervalId: any;

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startRotation() {
    let index = 0;
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.images.length;
      this.TimeImagen = this.images[index];
      this.TimeCat = this.categorias[index];
    }, 5000);
  }
}