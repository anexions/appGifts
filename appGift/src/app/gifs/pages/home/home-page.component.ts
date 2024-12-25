import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  //Recordar que como vamos a usar el servicio en este componente, lo tenemos que inyectar en el constructor.
  constructor(private GifsService: GifsService) {}

  //Y ahora para poder acceder a la lista de gifs que es privada, hacemos un get

  get gifs(): Gif[] {
    return this.GifsService.gifList;
  }

  ngOnInit(): void {}
}
