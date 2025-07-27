import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPromoComponent } from './sections/category-promo/category-promo.component';
import { ProductCarouselComponent } from './sections/product-carousel/product-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './sections/hero/hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, HeroComponent,
    CategoryPromoComponent, ProductCarouselComponent],
  imports: [
    HomeRoutingModule,
    NgbCarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
