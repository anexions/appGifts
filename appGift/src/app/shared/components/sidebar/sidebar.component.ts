import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private GifsService: GifsService) {}

  //como el servicio es privado, tenemos que acceder a los datos con un GET
  //El get accede al servcicio y nos da el historial

  get tags() {
    return this.GifsService.tagsHistory;
  }

  //Y ahora como necesitamos que al hacer un click haga la busqueda, también tenemos que tener acceso a esos gifs del gifs service.
  get gifs(): Gif[] {
    return this.GifsService.gifList;
  }

  //Metodo para ejecutar cuando pulsamos el boton
  showGifs(tag:string) {
    return this.GifsService.gifList;
  }

  ngOnInit(): void {}
}
