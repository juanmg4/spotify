import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
@Input() items: any[] = []; //le va a llegar un array de artistas, canciones, nuevos lanzamientos o favoritos
@Input() type: string; // para saber si lo que tengo que renderizar es una cancion, artista, nuevo lanzamiento o favorito

  constructor() {}

  ngOnInit(): void {
  }

}
