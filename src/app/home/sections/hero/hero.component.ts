import { Component } from '@angular/core';
import 'hammerjs';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
    showArrows = false;

    images = [
        {
            url: 'assets/banners/hero-banner1.jpg',
            title: 'Interactive Practice',
            subtitle: 'Hands-on Learning',
            description: 'Learn by doing, with real code challenges.',
            cta: 'Start Practicing'
        },
        {
            url: 'assets/banners/hero-banner2.jpg',
            title: 'Build Angular Skills',
            subtitle: 'Master Every Topic',
            description: 'Start from the fundamentals and grow step-by-step.',
            cta: 'Explore Now'
        },
        {
            url: 'assets/banners/hero-banner3.jpg',
            title: 'Real Projects',
            subtitle: 'Learn by Doing',
            description: 'Clone real websites and improve your frontend skills.',
            cta: 'View Projects'
        }
    ];

    toggleArrows() {
        this.showArrows = !this.showArrows;
    }

    onSwipeLeft(carousel: any) {
        this.showArrows = true;
        carousel.next();
        this.hideArrowsAfterDelay();
    }

    onSwipeRight(carousel: any) {
        this.showArrows = true;
        carousel.prev();
        this.hideArrowsAfterDelay();
    }

    hideArrowsAfterDelay() {
        setTimeout(() => this.showArrows = false, 4000);
    }
}
