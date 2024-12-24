import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'gif-seach-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" placeholder="Buscar gif..."
    (keyup.enter)="searchTag(txtTagInput.value)" 
    #txtTagInput 
    
    />
  `,
})
export class SearchBoxComponent {


@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>;


  constructor() {}

  //Vamos a crear un metodo para el input que se escribe en el searchBox
  //En la linea 9 txtTagInput es un nombre inventado para tenerlo como referencia a lo que el usuario escriba en la caja de busqueda.
  searchTag(newTag: string) {
    console.log(newTag);
  }
}
