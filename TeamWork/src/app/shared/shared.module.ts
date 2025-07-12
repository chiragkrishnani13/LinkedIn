import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModule } from '../admin/admin.module';
import { RouterLink } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    SharedComponent,
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
    SharedComponent
  ]
})
export class SharedModule { }

