import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

/* Cantidad inicial de tarjetas que se van a mostrar en la home */
cantidadTarjetas: number = 8;

/* Array que contiene todos los nuevos lanzamientos, obtenidos por el metodo getNewReleases del servicio de spotify */
nuevasCanciones: any[] = [];

/* El servicio de favoritos es para porder guardar los favoritos de la home y mostrarlos en search */
  constructor(private _spotify: SpotifyService, public _favoritos: FavoritosService) {
    this._spotify.getNewReleases().subscribe( (data:any) => {
      console.log(data);
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
   }

  ngOnInit(): void {
  }

     /* Para incrementar la cantidad de tarjetas que se van mostrando, de a 8 por vez */
     increaseShowHome() {
      this.cantidadTarjetas += 8;
    }

    /* si el servicio lo declaro como private */
    /*guardarFavoritos(i){
      this._favoritos.guardarNuevoLanzamientoFavorito(i)
    }*/
}

