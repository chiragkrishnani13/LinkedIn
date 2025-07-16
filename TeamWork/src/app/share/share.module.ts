import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePostComponent } from './single-post/single-post.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    HomePageComponent,
    SinglePostComponent,
    SinglePostComponent
  ]
})
export class ShareModule { }
