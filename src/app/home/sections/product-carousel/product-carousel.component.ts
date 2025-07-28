import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
    @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;
    @Output() productSelected = new EventEmitter<any>();

    products: Product[] = [
        {
            name: 'Oversize T-Shirt',
            image: 'assets/images/image1.webp',
            price: '₹2,999',
            id: 1,
            desc: 'A comfortable and stylish oversize t-shirt made from high-quality cotton.'
        },
        {
            name: 'Casual Combo',
            image: 'assets/images/image2.webp',
            price: '₹4,499',
            id: 2,
            desc: 'A perfect combo of casual wear for a relaxed day out.'
        },
        {
            name: 'Modern T-Shirt',
            image: 'assets/images/image3.webp',
            price: '₹3,199',
            id: 3,
            desc: 'A modern take on the classic t-shirt, perfect for any occasion.'
        },
        {
            name: 'Cotton Dress',
            image: 'assets/images/image4.webp',
            price: '₹2,199',
            id: 4,
            desc: 'A stylish cotton dress that’s perfect for any casual outing.'
        }
    ];

    groupedProducts: any[][] = [];

    ngOnInit(): void {
        const groupSize = 2;
        for (let i = 0; i < this.products.length; i += groupSize) {
            this.groupedProducts.push(this.products.slice(i, i + groupSize));
        }
    }

    onSwipeLeft(): void {
        this.carousel.next();
    }

    onSwipeRight(): void {
        this.carousel.prev();
    }

    selectProduct(product: any): void {
        this.productSelected.emit(product);
    }
}
