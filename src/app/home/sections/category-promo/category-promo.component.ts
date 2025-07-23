import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-promo',
    templateUrl: './category-promo.component.html',
    styleUrls: ['./category-promo.component.scss'],
})
export class CategoryPromoComponent implements OnInit {
    categories = [
        { name: 'Electronics', image: 'assets/images/categories/electronics.webp' },
        { name: 'Fashion', image: 'assets/images/categories/fashion.webp' },
        { name: 'Books', image: 'assets/images/categories/books.webp' },
        { name: 'Fitness', image: 'assets/images/categories/fitness.webp' },
        { name: 'Toys', image: 'assets/images/categories/toys.webp' },
        { name: 'Home Decor', image: 'assets/images/categories/home.webp' },
    ];

    currentIndex = 0;
    cardsPerView = 3;

    ngOnInit(): void {
        this.updateCardsPerView();
    }

    @HostListener('window:resize')
    onResize() {
        this.updateCardsPerView();
    }

    updateCardsPerView() {
        const width = window.innerWidth;
        if (width < 576) {
            this.cardsPerView = 1;
        } else if (width < 992) {
            this.cardsPerView = 2;
        } else {
            this.cardsPerView = 3;
        }
    }

    get visibleCategories() {
        return this.categories.slice(this.currentIndex, this.currentIndex + this.cardsPerView);
    }

    nextSlide() {
        if (this.currentIndex + this.cardsPerView < this.categories.length) {
            this.currentIndex++;
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    goToSlide(index: number) {
        this.currentIndex = index;
    }

    get isPrevDisabled(): boolean {
        return this.currentIndex === 0;
    }

    get isNextDisabled(): boolean {
        return this.currentIndex + this.cardsPerView >= this.categories.length;
    }

    get totalDots(): number[] {
        return Array.from({ length: this.categories.length - this.cardsPerView + 1 }, (_, i) => i);
    }
}
