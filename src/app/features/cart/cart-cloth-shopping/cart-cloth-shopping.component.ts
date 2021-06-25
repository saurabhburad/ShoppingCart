import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-cloth-shop',
  templateUrl: './cart-cloth-shopping.component.html',
  styleUrls: ['./cart-cloth-shopping.component.css']
})
export class CartClothShoppingComponent implements OnInit{
  public itemsAddedInCart;
  
  public sumTotal;
  
  constructor(private router: Router){
    
  }
  ngOnInit(){
    this.itemsAddedInCart = [];
    this.itemsAddedInCart =  JSON.parse(localStorage.getItem('cartObject'));
    this.sumTotalOfProducts();
  }
  
  sumTotalOfProducts(){
    this.sumTotal = 0;
    if(this.itemsAddedInCart){
      for(let i=0;i<this.itemsAddedInCart.length;i++) {
       this.sumTotal = this.sumTotal + (this.itemsAddedInCart[i].price * this.itemsAddedInCart[i].productQuantities);
 
      }
 
     }
  }
  //navigate user to the product's details page
  buyProducts(products) {
    this.router.navigate(['/orderDetails/buyProducts'],{ state: { totalItemsInOrder: products } });
  }

  // remove item from the cart
  removeProductFromCart(currentItem){
    let updatedCartItems = this.itemsAddedInCart;
    this.itemsAddedInCart.forEach(function (value,index) {
      if(value.product_id === currentItem.product_id){
        if(value.selectedSize === currentItem.selectedSize){
          updatedCartItems.splice(index, 1);
        }
      }
    });
    this.itemsAddedInCart = updatedCartItems;
    //save data in local storage------------------------------------
    localStorage.setItem('cartObject', JSON.stringify(this.itemsAddedInCart));
    this.sumTotalOfProducts();
  }
}