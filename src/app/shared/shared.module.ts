import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';



@NgModule({
  declarations: [
    FeaturedProductComponent,
    ProductCardComponent,
    BannerComponent,
    SectionHeadingComponent,
    FilterSidebarComponent,
    ImageGalleryComponent,
    QuantitySelectorComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    ToastAlertComponent,
    FeaturedSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FeaturedProductComponent,
    ProductCardComponent,
    BannerComponent,
    SectionHeadingComponent,
    FilterSidebarComponent,
    ImageGalleryComponent,
    QuantitySelectorComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    ToastAlertComponent,
    FeaturedSectionComponent
  ]
})
export class SharedModule { }
