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

  // Promo categories for FeaturedSectionComponent
  categoryPromoData = [
    {
      id: 1,
      title: 'Men',
      image: 'assets/categories/men.webp',
      link: '/category/men'
    },
    {
      id: 2,
      title: 'Women',
      image: 'assets/categories/women.webp',
      link: '/category/women'
    },
    {
      id: 3,
      title: 'Accessories',
      image: 'assets/categories/accessories.webp',
      link: '/category/accessories'
    },
    {
      id: 4,
      title: 'Shoes',
      image: 'assets/categories/shoes.webp',
      link: '/category/shoes'
    },
    {
      id: 5,
      title: 'Kids',
      image: 'assets/categories/kids.webp',
      link: '/category/kids'
    }
  ];

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
