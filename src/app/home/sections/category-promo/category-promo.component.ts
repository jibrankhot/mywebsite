import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-promo',
    templateUrl: './category-promo.component.html',
    styleUrls: ['./category-promo.component.scss'],
})
export class CategoryPromoComponent implements OnInit {
    categories = [
        { title: 'Electronics', image: 'assets/images/image1.webp' },
        { title: 'Fashion', image: 'assets/images/image2.webp' },
        { title: 'Books', image: 'assets/images/image3.webp' },
        { title: 'Fitness', image: 'assets/images/image4.webp' },
        { title: 'Toys', image: 'assets/images/image1.webp' },
        { title: 'Home Decor', image: 'assets/images/image2.webp' },
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
        const total = this.categories.length;
        const end = this.currentIndex + this.cardsPerView;

        if (end <= total) {
            return this.categories.slice(this.currentIndex, end);
        }

        const firstPart = this.categories.slice(this.currentIndex);
        const remaining = end - total;
        const secondPart = this.categories.slice(0, remaining);
        return [...firstPart, ...secondPart];
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.categories.length;
    }

    prevSlide() {
        this.currentIndex =
            (this.currentIndex - 1 + this.categories.length) % this.categories.length;
    }

    goToSlide(index: number) {
        this.currentIndex = index;
    }

    get totalDots(): number[] {
        return this.categories.map((_, i) => i);
    }

    // Dot shows for the "focused"/first visible card
    get activeDotIndex(): number {
        return this.currentIndex;
    }

    get trackTransform(): string {
        const percentage = -(this.currentIndex * (100 / this.cardsPerView));
        return `translateX(${percentage}%)`;
    }
}
