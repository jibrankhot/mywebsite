import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('featuredSection') featuredSection!: ElementRef;
  @ViewChild('productCarousel') productCarousel!: ElementRef;

  // Default featured product
  featuredProduct = {
    name: 'Summer Linen Shirt',
    desc: 'Top pick from carousel selection. High-quality and popular choice.',
    image: 'assets/images/image1.webp',
    price: '₹1,999'
  };

  /**
   * When a product is selected from carousel
   */
  updateFeaturedProduct(product: any) {
    this.featuredProduct = {
      name: product.name,
      desc: 'Top pick from carousel selection. High-quality and popular choice.',
      image: product.image,
      price: product.price
    };

    // Scroll to featured section with highlight
    setTimeout(() => {
      const section = this.featuredSection?.nativeElement;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      section.classList.add('flash-focus');
      setTimeout(() => section.classList.remove('flash-focus'), 1000);
    }, 150);
  }

  /**
   * Triggered from Featured section back button
   */
  scrollToCarousel() {
    this.productCarousel?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
