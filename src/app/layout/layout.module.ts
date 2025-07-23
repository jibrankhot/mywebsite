import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
