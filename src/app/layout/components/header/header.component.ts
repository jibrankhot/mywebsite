import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faHeart, faShoppingBag, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {
    this.checkIsMobile();
  }

  // Icons
  faSearch = faSearch;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;
  faBars = faBars;
  faTimes = faTimes;

  // UI states
  isHeaderHidden = false;
  isMobile = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  hoveredDropdown: string | null = null;
  private lastScroll = 0;

  @HostListener('window:resize') onResize() {
    this.checkIsMobile();
  }

  @HostListener('window:scroll') onScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isHeaderHidden = currentScroll > this.lastScroll && currentScroll > 100;
    this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideNav = target.closest('nav.main-nav');
    const clickedToggle = target.closest('.mobile-toggle');
    if (!clickedInsideNav && !clickedToggle && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
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

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  onHover(menu: string) {
    if (!this.isMobile) {
      this.hoveredDropdown = menu;
    }
  }

  onLeave(menu: string) {
    if (!this.isMobile && this.hoveredDropdown === menu) {
      this.hoveredDropdown = null;
    }
  }

  // Dummy product data (can connect to API later)
  newProducts = [
    {
      name: 'Casual Striped Shirt',
      price: '$39.99',
      desc: 'Light and breathable for spring.',
      img: 'assets/images/image1.webp'
    },
    {
      name: 'Vintage Denim Jacket',
      price: '$59.00',
      desc: 'Stylish and warm denim layering.',
      img: 'assets/images/image2.webp'
    },
    {
      name: 'Floral Summer Dress',
      price: '$49.99',
      desc: 'Fresh florals for a summer vibe.',
      img: 'assets/images/image3.webp'
    },
    {
      name: 'Classic White Tee',
      price: '$19.99',
      desc: 'Everyday basic you need.',
      img: 'assets/images/image4.webp'
    }
  ];

  featuredProduct = {
    title: 'Vintage Denim Jacket',
    price: '$59.00',
    desc: 'Step into the new season with our effortlessly stylish outerwear collection.',
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
    this.router.navigate(['/product', product.id]);
  }
}