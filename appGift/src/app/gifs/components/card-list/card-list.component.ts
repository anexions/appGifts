import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'card-list-component',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //Este input se lo vamos a mandar al home-page.component
  @Input()
  public gifsList: Gif[] = [];

}
