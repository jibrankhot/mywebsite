import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('featuredSection') featuredSection!: ElementRef;
  @ViewChild('productCarousel') productCarousel!: ElementRef;

  // Default featured product
  featuredProduct: Product = {
    id: 1,
    name: 'Summer Linen Shirt',
    desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
    image: 'assets/images/image1.webp',
    price: '₹1,999'
  };


  updateFeaturedProduct(product: Product) {
    this.featuredProduct = {
      id: product.id,
      name: product.name,
      desc: product.desc,
      image: product.image,
      price: product.price
    };

    setTimeout(() => {
      const section = this.featuredSection?.nativeElement;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      section.classList.add('flash-focus');
      setTimeout(() => section.classList.remove('flash-focus'), 1000);
    }, 150);
  }

  scrollToCarousel() {
    this.productCarousel?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
