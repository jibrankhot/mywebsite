// featured-section.component.ts
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-featured-section',
    templateUrl: './featured-section.component.html',
    styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent implements OnInit {
    @Input() title: string = '';
    @Input() items: { title: string; image: string; link?: string }[] = [];

    currentIndex = 0;
    cardsPerView = 3;

    ngOnInit(): void {
        this.updateCardsPerView();
    }

    @HostListener('window:resize')
    onResize(): void {
        this.updateCardsPerView();
    }

    updateCardsPerView(): void {
        const width = window.innerWidth;
        this.cardsPerView = width < 576 ? 1 : width < 992 ? 2 : 3;

        // Ensure currentIndex is valid
        const maxIndex = Math.max(0, this.totalSlides - 1);
        if (this.currentIndex > maxIndex) {
            this.currentIndex = maxIndex;
        }
    }

    prevSlide(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    nextSlide(): void {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
        }
    }

    goToSlide(idx: number): void {
        this.currentIndex = idx;
    }

    get totalSlides(): number {
        return Math.ceil(this.items.length / this.cardsPerView);
    }

    get totalDots(): number[] {
        return Array(this.totalSlides).fill(0).map((_, i) => i);
    }

    get activeDotIndex(): number {
        return this.currentIndex;
    }

    get trackTransform(): string {
        const shift = -(this.currentIndex * 100);
        return `translateX(${shift}%)`;
    }

    get cardFlexBasis(): string {
        return `0 0 calc(${100 / this.cardsPerView}% - 20px)`;
    }
}
