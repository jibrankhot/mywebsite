import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class FeaturedProductComponent implements AfterViewInit, OnChanges {
  @Input() product!: Product;
  @Output() backToProducts = new EventEmitter<void>();
  imageLoaded = false;
  hasDescription = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.hasDescription = !!this.product.desc?.trim();
    }
  }

  ngAfterViewInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('FeaturedProductComponent initialized:', this.product);

    const section = this.el.nativeElement.querySelector('.featured-product-section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(section, 'animate-visible');
            this.renderer.addClass(section, 'flash-focus');

            setTimeout(() => {
              this.renderer.removeClass(section, 'flash-focus');
            }, 1500);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }

  goBackToCarousel() {
    this.backToProducts.emit();
  }
}
