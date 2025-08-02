import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-featured-section',
    templateUrl: './featured-section.component.html',
    styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent implements OnInit {
    @Input() title: string = '';
    @Input() items: { title: string; image: string }[] = [];

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
        this.cardsPerView = width < 576 ? 1 : width < 992 ? 2 : 3;
    }

    get visibleItems() {
        const total = this.items.length;
        const end = this.currentIndex + this.cardsPerView;
        if (end <= total) return this.items.slice(this.currentIndex, end);
        return [...this.items.slice(this.currentIndex), ...this.items.slice(0, end - total)];
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }

    goToSlide(index: number) {
        this.currentIndex = index;
    }

    get totalDots(): number[] {
        return this.items.map((_, i) => i);
    }

    get activeDotIndex(): number {
        return this.currentIndex;
    }

    get trackTransform(): string {
        const percentage = -(this.currentIndex * (100 / this.cardsPerView));
        return `translateX(${percentage}%)`;
    }
}
