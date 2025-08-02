import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {
  @Input() product: any;
  @Output() backToProducts = new EventEmitter<void>();
  imageLoaded = false;

  goBackToCarousel() {
    this.backToProducts.emit();
  }
}
