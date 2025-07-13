import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModule } from '../admin/admin.module';
import { RouterLink } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SinglePostComponent
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




