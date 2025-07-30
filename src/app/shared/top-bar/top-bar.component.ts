import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
    selectedLanguage = 'English';
    languages = ['English', 'French', 'German', 'Spanish'];
    showAccountMenu = false;
    cartCount = 3;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.cartCount$.subscribe(count => {
            this.cartCount = count;
        });
    }
}
