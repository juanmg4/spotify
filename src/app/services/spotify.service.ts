import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Este nuevo Injectable, con providedIn, importa automaticamente el servicio en app.module.ts
@Injectable({
  providedIn: 'root',
})

export class SpotifyService {

  /* Token para poder obtener los datos de la api de spotify */
  token:string = `Bearer BQDmIS8NQvgdqqY2MI4HUFhXxoGiriK-UYlQwk7EZ6zovSxV1ufpPfJUIIq7pyEKtrWgszEb4B1oueMDXiE`;

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  /* las peticiones que hago en postman, pero aca en Angular */
  // Obtener nuevos lanzamientos
  getNewReleases(){
   const headers = new HttpHeaders({
    //autorizacion para poder recibir los datos en la peticion get. Tengo que mandar el token
    'Authorization': this.token
  });
  //Por defecto la api de spotify me devuelve 20 registros. Puedo cambiar eso agregando al final de la url ?limit=5
  return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=24', { headers });
}

  // Obtener Artistas
  getArtistas( contenidoBusqueda: string ){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    /* Solo cambia la parte que va desde q= hasta &type */
    return this.http.get(`https://api.spotify.com/v1/search?q=${ contenidoBusqueda }&type=artist&limit=16`, { headers });
  }

  // Obtener Canciones
  getTracks( contenidoBusqueda: string ){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    /* Solo cambia la parte que va desde q= hasta &type */
    return this.http.get(`https://api.spotify.com/v1/search?q=${ contenidoBusqueda }&type=track&limit=8`, { headers });
  }
}

/* Enlace de busqueda por artista obtenido desde la pagina de spotify*/
/* https://api.spotify.com/v1/search?q=ricardo%20arjona&type=artist&limit=10 */
