import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReplaceSpacesPipe } from '../shared/pipes/replace-spaces.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    TopBarComponent,
    ReplaceSpacesPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
