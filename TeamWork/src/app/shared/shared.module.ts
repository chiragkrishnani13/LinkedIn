import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
=======
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModule } from '../admin/admin.module';
import { RouterLink } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
>>>>>>> 5d332da5acb61780aacfa2a81e29224f0a22f174

@NgModule({
  declarations: [
    NavbarComponent,
<<<<<<< HEAD
    FooterComponent
=======
    FooterComponent,
    HomePageComponent,
    SinglePostComponent
>>>>>>> 5d332da5acb61780aacfa2a81e29224f0a22f174
  ],
  imports: [
    CommonModule,
    AdminModule,
    RouterLink
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }




