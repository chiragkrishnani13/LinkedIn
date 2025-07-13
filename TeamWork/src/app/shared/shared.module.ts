import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SharedComponent } from './shared.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SinglePostComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HomePageModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SinglePostComponent,
    SharedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

