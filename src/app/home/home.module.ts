import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPromoComponent } from './sections/category-promo/category-promo.component';
import { ProductShowcaseComponent } from './sections/product-showcase/product-showcase.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './sections/hero/hero.component';

@NgModule({
  declarations: [HomePageComponent, HeroComponent, CategoryPromoComponent, ProductShowcaseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
  ]
})
export class HomeModule { }
