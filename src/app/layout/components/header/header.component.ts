import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faHeart, faClone, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { this.checkIsMobile(); }
  faSearch = faSearch;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;
  showMegaMenu = false;
  isSticky = true;
  isMobileMenuOpen = false;
  faBars = faBars;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  isMobile = false;
  activeDropdown: string | null = null;

  @HostListener('window:resize', [])
  onResize() {
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleDropdown(menu: string) {
    if (this.isMobile) {
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    }
  }

  isDropdownActive(menu: string): boolean {
    return this.isMobile && this.activeDropdown === menu;
  }
  megaMenuCategories = [
    {
      title: 'Categories 1',
      items: ['Smartphone', 'Fashion', 'Korean Style', 'Toys', 'Game Box']
    },
    {
      title: 'Categories 2',
      items: ['Accessories', 'Electronic', 'Watch Machine', 'Vegetable', 'Bread']
    },
    {
      title: 'Categories 3',
      items: ['Blender', 'Fruits', 'Leaves', 'Demonstrates', 'Computer']
    }
  ];

  newProducts = [
    { name: 'Casual Striped Shirt', price: '$39.99', desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.', img: 'assets/images/image1.webp' },
    { name: 'Vintage Denim Jacket', price: '$59.00', desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.', img: 'assets/images/image2.webp' },
    { name: 'Floral Summer Dress', price: '$49.99', desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.', img: 'assets/images/image3.webp' },
    { name: 'Classic White Tee', price: '$19.99', desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.', img: 'assets/images/image4.webp' }
  ];

  featuredProduct = {
    title: 'Vintage Denim Jacket',
    price: '$59.00',
    desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
    img: 'assets/images/image2.webp'
  };

  onNewProductClick(product: any) {
    this.featuredProduct = {
      title: product.name,
      price: product.price,
      desc: product.desc,
      img: product.img
    };
  }

  onFeaturedProductClick(product: any) {
    console.log('Featured Product Clicked:', product);
    this.router.navigate(['/product', product.id]);
  }
}
