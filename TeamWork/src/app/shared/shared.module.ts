import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SinglePostComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SinglePostComponent,
    SharedComponent
  ]
})
export class SharedModule { }

