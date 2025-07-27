import { Component } from '@angular/core';
import { faSearch, faHeart, faClone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSearch = faSearch;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;

  showMegaMenu = false;
  isSticky = true;
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
    { name: 'Casual Striped Shirt', price: '$39.99', img: 'assets/images/image1.webp' },
    { name: 'Vintage Denim Jacket', price: '$59.00', img: 'assets/images/image2.webp' },
    { name: 'Casual Striped Shirt', price: '$39.99', img: 'assets/images/image1.webp' },
    { name: 'Vintage Denim Jacket', price: '$59.00', img: 'assets/images/image2.webp' },
  ];
  featuredProduct = {
    title: 'Vintage Denim Jacket',
    desc: 'Step into the new season with our effortlessly stylish outerwear collection, made for comfort and class.',
    img: 'assets/images/image2.webp',
    btnText: 'Discover Now'
  };


}
