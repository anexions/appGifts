import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponent, 
    SearchBoxComponent,
    CardListComponent
  ], //SearchBoxComponent no se exporta porque solo se va a usar en el componente HomePage que ya se está exportando.
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
