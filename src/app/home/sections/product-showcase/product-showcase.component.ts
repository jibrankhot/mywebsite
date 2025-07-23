import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-showcase',
    templateUrl: './product-showcase.component.html',
    styleUrls: ['./product-showcase.component.scss']
})
export class ProductShowcaseComponent implements OnInit {
    @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

    products = [
        {
            name: 'Oversize T-Shirt',
            image: 'assets/images/image1.webp',
            price: '₹2,999'
        },
        {
            name: 'Casual Combo',
            image: 'assets/images/image2.webp',
            price: '₹4,499'
        },
        {
            name: 'Modern T-Shirt',
            image: 'assets/images/image3.webp',
            price: '₹3,199'
        },
        {
            name: 'Cotton Dress',
            image: 'assets/images/image4.webp',
            price: '₹2,199'
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
}
