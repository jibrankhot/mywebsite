import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartCountSource = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCountSource.asObservable();

    updateCartCount(count: number) {
        this.cartCountSource.next(count);
    }

    incrementCart() {
        const current = this.cartCountSource.value;
        this.cartCountSource.next(current + 1);
    }

    decrementCart() {
        const current = this.cartCountSource.value;
        this.cartCountSource.next(Math.max(0, current - 1));
    }
}
