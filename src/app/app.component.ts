import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, DatePipe, UpperCasePipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  apellido = 'Godoy José';

  peliculas = [
    {
      titulo: "Spiderman",
      fechalanzamiento: new Date(),
      precio: 140.00,
      poster: "https://theoriginalpostershop.com/cdn/shop/products/comic-marvel-classic-spiderman_800x.jpg?v=1599477571"
    },
    {
      titulo: "Hulk",
      fechalanzamiento: new Date(),
      precio: 170.00,
      poster: "https://pm1.aminoapps.com/6305/fffb8007037a7f4a0aca445879248b2a270021ab_hq.jpg"
    },
    {
      titulo: "Los Increibles",
      fechalanzamiento: new Date(),
      precio: 100.00,
      poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/04/increibles.jpg?tf=1080x"
    },
    {
      titulo: "Up",
      fechalanzamiento: new Date(),
      precio: 130.00,
      poster: "https://i.pinimg.com/236x/8f/7f/cd/8f7fcdb8804bcd69a48aad5c91dd9aaf.jpg"
    },
    {
      titulo: "minions",
      fechalanzamiento: new Date(),
      precio: 80.99,
      poster: "https://i.pinimg.com/originals/5c/37/45/5c3745dfcb150e4753bdc9c99020dd2e.jpg"
    },
    {
      titulo: "hercules",
      fechalanzamiento: new Date(),
      precio: 110.00,
      poster: "https://i.pinimg.com/236x/da/63/b5/da63b55dcb79456a6920c83393a94f8f.jpg"
    },
    {
      titulo: "Dumbo",
      fechalanzamiento: new Date(),
      precio: 150.00,
      poster: "https://i.pinimg.com/236x/a6/6b/5e/a66b5edfbb89ac7cc8cd6679310a0342.jpg"
    },
    {
      titulo: "Sonic",
      fechalanzamiento: new Date(),
      precio: 90.99,
      poster: "https://www.lahiguera.net/cinemania/pelicula/8837/sonic_la_pelicula-cartel-8896.jpg"
    }

  ]
  toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Alternar la clase dark-mode
  }

}
