import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productsData } from './../../../data/products';

@Component({
  selector: 'app-product-details-cloth-shop',
  templateUrl: './products-details-cloth-shopping.component.html',
  styleUrls: ['./products-details-cloth-shopping.component.css']
})
export class ProductDetailsClothShoppingComponent {
  public currentItem;
  public allProductsData;
  isInCart = false;
  cart;
  oldCartData;
  constructor(private router: Router) {
    this.currentItem = this.router.getCurrentNavigation().extras.state.currentProductData;
    this.currentItem.productQuantities = 1;
    this.currentItem.selectedSize = "Select Size";
    this.allProductsData = productsData;
  }

  //navigate user to the product's details page
  openProductDetails(product) {
    this.router.navigate(['/productDetails/details'], { state: { currentProductData: product } });
  }


  // navigate to add to cart section
  addProductToCart(product) {
    this.router.navigate(['/cartDetails/shoppingCart']);
    let cartData = [];
    if(JSON.parse(localStorage.getItem('cartObject'))){
      this.oldCartData = (JSON.parse(localStorage.getItem('cartObject')));
      
      this.oldCartData.forEach(function (value) {
        
        cartData.push(value);
      });
    }
    this.cart = cartData;
    if (this.cart) {
      this.isInCart = this.cart.some(item => item.product_id === product.product_id);
    } else {
      this.cart = [];
    }

    if (this.isInCart) {
      this.cart.map(item => {
        if (item.product_id === product.product_id) {
          if(item.selectedSize === product.selectedSize){
            item.productQuantities += product.productQuantities;
            return item;
          }
          else{
            this.cart.push(product);
          }
        }
        
      });
    } else {
      this.cart.push(product);
    }

    //save data in local storage------------------------------------
    localStorage.setItem('cartObject', JSON.stringify(this.cart));
  }
}