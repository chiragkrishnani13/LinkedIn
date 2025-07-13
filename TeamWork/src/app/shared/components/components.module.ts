import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomePageComponent } from '../home-page/home-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ]
})
export class ComponentsModule { }