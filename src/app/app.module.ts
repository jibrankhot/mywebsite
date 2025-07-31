import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturedProductsComponent } from './pages/home/featured-products/featured-products.component';
import { CategoryBannerComponent } from './pages/home/category-banner/category-banner.component';
import { PromotionalBannerComponent } from './pages/home/promotional-banner/promotional-banner.component';
import { ProductGridComponent } from './pages/category/product-grid/product-grid.component';
import { SidebarFiltersComponent } from './pages/category/sidebar-filters/sidebar-filters.component';
import { ProductInfoComponent } from './pages/product-detail/product-info/product-info.component';
import { ReviewsComponent } from './pages/product-detail/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedProductsComponent,
    CategoryBannerComponent,
    PromotionalBannerComponent,
    ProductGridComponent,
    SidebarFiltersComponent,
    ProductInfoComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
