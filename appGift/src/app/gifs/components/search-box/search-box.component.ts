import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-seach-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      placeholder="Buscar gif..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  //Los servicios se inyectan en los constructores de los componentes.
  constructor(private GifsService: GifsService) {}

  //Vamos a crear un metodo para el input que se escribe en el searchBox
  //En la linea 13 txtTagInput es un nombre inventado para tenerlo como referencia a lo que el usuario escriba en la caja de busqueda.
  //searchTag(newTag: string) { ESTO ES COMO LO HACIAMOS SIN EL VIEWCHILD

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag(newTag);

    //Limpiamos la caja de texto (para que quede bonito) ESTO ES IMPORTANTE HACERLO SIEMPRE

    this.tagInput.nativeElement.value = '';
  
  }
}
