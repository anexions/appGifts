import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [   //declaramos todos los componentes que usará este modulo.
    SidebarComponent, 
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent //para poder usarlo en otro lado.
  ]
})
export class SharedModule { }
